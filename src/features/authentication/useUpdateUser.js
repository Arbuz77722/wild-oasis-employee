import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUploading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('Account sucessfully updated');

      queryClient.invalidateQueries(['user']);
    },
    onError: () => {
      toast.error('Account could not be updated');
    },
  });
  return { updateUser, isUploading };
}
