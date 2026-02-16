import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import CabinRow from './CabinRow';
import { useCabin } from './useCabin';

function CabinTable() {
  const { isPending, cabins = [] } = useCabin();

  if (isPending) return <Spinner />;
  if (!cabins.length) return <Empty resourceName={'cabins'} />;
  return (
    <Menus>
      <Table role='table' columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
