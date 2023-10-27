'use client';

import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardStyled from './styles';
import DashboardFavoriteStores from '@/components/DashboardFavoriteStores';

const Dashboard = () => (
  <DashboardStyled>
    <DashboardSidebar />
    <DashboardFavoriteStores />
  </DashboardStyled>
);

export default Dashboard;
