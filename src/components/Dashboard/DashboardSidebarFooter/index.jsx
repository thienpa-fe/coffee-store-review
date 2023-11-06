import DashboardSidebarFooterStyled from './styles';
import SidebarFooterFunction from '../SidebarFooterFunction';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';

const DashboardSidebarFooter = () => (
  <DashboardSidebarFooterStyled>
    <Link href="/dashboard/settings" className="nav">
      <SidebarFooterFunction
        functionIcon={<AiFillSetting />}
        content="Settings"
      />
    </Link>
    <Link href="/dashboard/mystores" className="nav">
      <SidebarFooterFunction
        functionIcon={<AiOutlineLogout />}
        content="Log Out"
      />
    </Link>
  </DashboardSidebarFooterStyled>
);

export default DashboardSidebarFooter;
