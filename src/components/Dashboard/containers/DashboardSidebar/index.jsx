import DashboardSidebarFooter from '@/components/Dashboard/containers/DashboardSidebarFooter';
import UserLoginInfo from '@/components/Dashboard/UserLoginInfo';
import SidebarMainFunctionsList from '../SidebarMainFunctionList';
import DashboardSidebarStyled from './styles';

const DashboardSidebar = () => (
  <DashboardSidebarStyled>
    <UserLoginInfo />
    <SidebarMainFunctionsList />
    <DashboardSidebarFooter />
  </DashboardSidebarStyled>
);

export default DashboardSidebar;
