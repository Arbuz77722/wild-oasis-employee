import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate('/dashboard', { replace: true });
      queryClient.setQueryData(['user'], user.user);
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error('Provided email or password are incorrect.');
    },
  });
  return { login, isLoggingIn };
}

export default useLogin;
