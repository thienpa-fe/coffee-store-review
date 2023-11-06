import SidebarFunction from '@/components/Dashboard/SidebarFunction';
import Link from 'next/link';
import { BsPersonCircle } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa6';
import { HiBuildingStorefront, HiMiniStar } from 'react-icons/hi2';
import { LiaChartBar } from 'react-icons/lia';
import { MdRateReview } from 'react-icons/md';
import SidebarFunctionsListStyled from './styles';

const SidebarFunctionsList = () => (
  <SidebarFunctionsListStyled>
    <Link href="/dashboard/mystores" className="nav">
      <SidebarFunction
        functionIcon={<HiBuildingStorefront />}
        content="My Stores"
      />
    </Link>
    <Link href="/dashboard/favoriteStores" className="nav">
      <SidebarFunction
        functionIcon={<HiMiniStar />}
        content="Favorite Stores"
      />
    </Link>
    <Link href="/dashboard/reviews" className="nav">
      <SidebarFunction functionIcon={<MdRateReview />} content="Reviews" />
    </Link>
    <Link href="/dashboard/myProfile" className="nav">
      <SidebarFunction functionIcon={<BsPersonCircle />} content="My Profile" />
    </Link>
    <Link href="/dashboard/statistic" className="nav">
      <SidebarFunction functionIcon={<LiaChartBar />} content="Statistic" />
    </Link>
    <Link href="/dashboard/shareurl" className="nav">
      <SidebarFunction functionIcon={<FaShare />} content="Share" />
    </Link>
  </SidebarFunctionsListStyled>
);

export default SidebarFunctionsList;
