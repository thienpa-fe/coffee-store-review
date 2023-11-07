'use client';

import DashboardSidebar from '@/components/Dashboard/containers/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({ children }) => (
  <div>
    <DashboardSidebar />
    {children}
  </div>
);

export default DashboardLayout;
