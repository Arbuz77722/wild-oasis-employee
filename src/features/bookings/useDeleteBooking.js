import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success('Booking sucessfully deleted');
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
    onError: () => toast.error('Booking could not be deleted'),
  });
  return { deleteBooking, isDeletingBooking };
}
