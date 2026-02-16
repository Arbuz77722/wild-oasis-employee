import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, cabinsCount, numDays }) {
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const checkIns = confirmedStays.length;

  const rate =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title='Booking'
        icon={<HiOutlineBriefcase />}
        color='blue'
        value={bookings.length}
      />
      <Stat
        title='Sales'
        icon={<HiOutlineBanknotes />}
        color='green'
        value={formatCurrency(sales)}
      />
      <Stat
        title='Check ins'
        icon={<HiOutlineCalendarDays />}
        color='indigo'
        value={checkIns}
      />
      <Stat
        title='Occupancy Rate'
        icon={<HiOutlineChartBar />}
        color='yellow'
        value={Math.round(rate * 100) + '%'}
      />
    </>
  );
}

export default Stats;
