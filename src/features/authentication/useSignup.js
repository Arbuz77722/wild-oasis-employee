import { useMutation } from '@tanstack/react-query';
import { signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export default function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        'Account successfully created! Please verify email address from user email'
      );
    },
    onError: () => {
      toast.error('Account could not be created. Please try again');
    },
  });
  return { signup, isPending };
}
