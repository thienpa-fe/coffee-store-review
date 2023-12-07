'use client';

import BackToTopButton from '@/components/HomePage/common/BackToTopButton';
import HomePageHeader from '@/components/HomePage/containers/HomePageHeader';

const HomePageLayout = ({ children }) => (
  <div>
    <HomePageHeader />
    {children}
    <BackToTopButton />
  </div>
);

export default HomePageLayout;
