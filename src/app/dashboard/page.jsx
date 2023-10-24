'use client';

import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardStyled from './styles';
import DashboardFavoriteStores from '@/components/DashboardFavoriteStores';
import DashboardShareUrl from '@/components/DashboardShareUrl';

const Dashboard = () => (
  <DashboardStyled>
    <DashboardSidebar />
    <DashboardShareUrl />
  </DashboardStyled>
);

export default Dashboard;
