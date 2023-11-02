import SidebarFunctionsListStyled from './styles';
import SidebarFunction from '../SidebarFunction';
import { HiBuildingStorefront, HiMiniStar } from 'react-icons/hi2';
import { MdRateReview } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { LiaChartBar } from 'react-icons/lia';
import { FaShare } from 'react-icons/fa6';
import Link from 'next/link';

const SidebarFunctionsList = () => (
  <SidebarFunctionsListStyled>
    <Link href="/dashboard/mystores">
      <SidebarFunction
        functionIcon={<HiBuildingStorefront />}
        content="My Stores"
      />
    </Link>
    <Link href="/dashboard">
      <SidebarFunction
        functionIcon={<HiMiniStar />}
        content="Favorite Stores"
      />
    </Link>
    <Link href="/dashboard/reviews">
      <SidebarFunction functionIcon={<MdRateReview />} content="Reviews" />
    </Link>
    <Link href="/dashboard/myProfile">
      <SidebarFunction functionIcon={<BsPersonCircle />} content="My Profile" />
    </Link>
    <Link href="/dashboard/statistic">
      <SidebarFunction functionIcon={<LiaChartBar />} content="Statistic" />
    </Link>
    <Link href="/dashboard/shareurl">
      <SidebarFunction functionIcon={<FaShare />} content="Share" />
    </Link>
  </SidebarFunctionsListStyled>
);

export default SidebarFunctionsList;
