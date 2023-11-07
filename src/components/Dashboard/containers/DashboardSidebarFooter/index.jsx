import DashboardSidebarFooterStyled from './styles';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';
import SidebarFooterFunction from '@/components/Dashboard/SidebarFooterFunction';

const DashboardSidebarFooter = () => (
  <DashboardSidebarFooterStyled>
    <Link href="/dashboard/settings" className="nav">
      <SidebarFooterFunction
        functionIcon={<AiFillSetting />}
        content="Settings"
      />
    </Link>
    <Link href="/dashboard/my-stores" className="nav">
      <SidebarFooterFunction
        functionIcon={<AiOutlineLogout />}
        content="Log Out"
      />
    </Link>
  </DashboardSidebarFooterStyled>
);

export default DashboardSidebarFooter;
