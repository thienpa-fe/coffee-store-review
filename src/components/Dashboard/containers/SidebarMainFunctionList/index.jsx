import SidebarMainFunction from '@/components/Dashboard/SidebarMainFunction';
import Link from 'next/link';
import { BsPersonCircle } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa6';
import { HiBuildingStorefront, HiMiniStar } from 'react-icons/hi2';
import { LiaChartBar } from 'react-icons/lia';
import { MdRateReview } from 'react-icons/md';
import SidebarMainFunctionsListStyled from './styles';

const SidebarMainFunctionsList = () => (
  <SidebarMainFunctionsListStyled>
    <Link href="/dashboard/my-stores" className="nav">
      <SidebarMainFunction
        functionIcon={<HiBuildingStorefront />}
        content="My Stores"
      />
    </Link>
    <Link href="/dashboard/favorite-stores" className="nav">
      <SidebarMainFunction
        functionIcon={<HiMiniStar />}
        content="Favorite Stores"
      />
    </Link>
    <Link href="/dashboard/reviews" className="nav">
      <SidebarMainFunction functionIcon={<MdRateReview />} content="Reviews" />
    </Link>
    <Link href="/dashboard/my-profile" className="nav">
      <SidebarMainFunction
        functionIcon={<BsPersonCircle />}
        content="My Profile"
      />
    </Link>
    <Link href="/dashboard/statistic" className="nav">
      <SidebarMainFunction functionIcon={<LiaChartBar />} content="Statistic" />
    </Link>
    <Link href="/dashboard/share-url" className="nav">
      <SidebarMainFunction functionIcon={<FaShare />} content="Share" />
    </Link>
  </SidebarMainFunctionsListStyled>
);

export default SidebarMainFunctionsList;
