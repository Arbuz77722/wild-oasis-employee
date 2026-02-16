import toast from 'react-hot-toast';
import { createEditCabin as createEditCabinApi } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isPending: isCreated } = useMutation({
    mutationFn: createEditCabinApi,
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreated, createCabin };
}
