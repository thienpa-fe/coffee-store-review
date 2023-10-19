'use client';

import HomePageHeader from '@/components/HomePageHeader';
import HomePageStyled from './styles';
import HomePageCoffeeShopsList from '@/components/HomePageCoffeeShopsList';

const HomePage = () => (
  <HomePageStyled>
    <HomePageHeader />
    <HomePageCoffeeShopsList />
  </HomePageStyled>
);

export default HomePage;
