'use client';

import HomePageHeader from '@/components/HomePage/containers/HomePageHeader';

const HomePageLayout = ({ children }) => (
  <div>
    <HomePageHeader />
    {children}
  </div>
);

export default HomePageLayout;
