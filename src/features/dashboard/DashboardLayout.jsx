import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';
import { useCabin } from '../cabins/useCabin';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivities from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isBookingPending, numDays } = useRecentBookings();
  const { confirmedStays, isStaysPending } = useRecentStays();
  const { cabins, isPending: IsCabinPending } = useCabin();

  if (isBookingPending || isStaysPending || IsCabinPending) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabinsCount={cabins.length}
        numDays={numDays}
      />
      <TodayActivities />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
