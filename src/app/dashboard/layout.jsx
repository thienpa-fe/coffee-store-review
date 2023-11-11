'use client';

import DashboardSidebar from '@/components/Dashboard/containers/DashboardSidebar';

const DashboardLayout = ({ children }) => (
  <div>
    <DashboardSidebar />
    {children}
  </div>
);

export default DashboardLayout;
