import toast from 'react-hot-toast';
import { createEditCabin as createEditCabinApi } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabinApi(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully updated');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
