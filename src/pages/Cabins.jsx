import CabinTable from '../features/cabins/CabinTable';

import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddCabin from '../features/cabins/AddCabin';
import CabinOperationsTable from '../features/cabins/CabinOperationsTable';

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <CabinOperationsTable />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
