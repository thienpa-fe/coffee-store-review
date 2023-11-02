'use client';

import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardStyled from './styles';
import DashboardMyStores from '@/components/DashboardMyStores';

const MyStores = () => (
  <DashboardStyled>
    <DashboardSidebar />
    <DashboardMyStores />
  </DashboardStyled>
);

export default MyStores;
