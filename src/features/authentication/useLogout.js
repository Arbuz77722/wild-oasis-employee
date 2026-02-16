import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(['user']);
      navigate('/login', { replace: true });
    },
  });
  return { logout, isLoggingOut };
}
