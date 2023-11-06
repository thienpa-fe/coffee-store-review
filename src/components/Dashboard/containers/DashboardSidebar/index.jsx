import DashboardSidebarFooter from '@/components/Dashboard/DashboardSidebarFooter';
import UserLoginInfo from '@/components/Dashboard/UserLoginInfo';
import SidebarFunctionsList from '../SidebarFunctionList';
import DashboardSidebarStyled from './styles';

const DashboardSidebar = () => (
  <DashboardSidebarStyled>
    <UserLoginInfo />
    <SidebarFunctionsList />
    <DashboardSidebarFooter />
  </DashboardSidebarStyled>
);

export default DashboardSidebar;
