'use client';

import React from 'react';
import ShareUrlStyled from './styles';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardShareUrl from '@/components/DashboardShareUrl';

const ShareUrl = () => (
  <ShareUrlStyled>
    <DashboardSidebar />
    <DashboardShareUrl />
  </ShareUrlStyled>
);

export default ShareUrl;
