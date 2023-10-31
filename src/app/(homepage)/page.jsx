'use client';

import HomePageHeader from '@/components/HomePageHeader';
import HomePageStyled from './styles';
import HomePageCoffeeShopsList from '@/components/HomePageCoffeeShopsList';
import Footer from '@/components/Footer';

const HomePage = () => (
  <HomePageStyled>
    <HomePageHeader />
    <HomePageCoffeeShopsList />
    <Footer />
  </HomePageStyled>
);

export default HomePage;
