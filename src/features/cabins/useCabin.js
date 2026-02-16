import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import { useSearchParams } from 'react-router-dom';

export function useCabin() {
  //Filter
  const [searchParams] = useSearchParams();
  const filterValues = searchParams.get('discount') || 'all';
  const filter =
    filterValues === 'with-discount'
      ? { method: 'gt', field: 'discount', value: 0 }
      : filterValues === 'no-discount'
        ? { method: 'eq', field: 'discount', value: 0 }
        : null;

  //Sort
  const sortByRaw = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  const { isPending, data } = useQuery({
    queryKey: ['cabins', filter, sortBy],
    queryFn: () => getCabins({ filter, sortBy }),
  });

  return { isPending, cabins: data ?? [] };
}
