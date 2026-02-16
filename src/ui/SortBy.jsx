import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'startDate-asc';

  function handleChange(e) {
    const params = new URLSearchParams(searchParams);
    params.set('sortBy', e.target.value);
    setSearchParams(params);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type='white'
      onChange={handleChange}
    />
  );
}

export default SortBy;
