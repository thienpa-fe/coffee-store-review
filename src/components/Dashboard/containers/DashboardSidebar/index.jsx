import DashboardSidebarFooterMenu from '@/components/Dashboard/DashboardSidebarFooterMenu';
import DashboardSidebarMenu from '@/components/Dashboard/DashboardSidebarMenu';
import DashboardSidebarstyled from '@/components/Dashboard/containers/DashboardSidebar/styles';

const DashboardSidebar = () => (
  <DashboardSidebarstyled>
    <DashboardSidebarMenu />
    <DashboardSidebarFooterMenu />
  </DashboardSidebarstyled>
);

export default DashboardSidebar;
