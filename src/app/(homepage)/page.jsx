'use client';

import HomePageHeader from '@/components/HomePageHeader';
import HomePageStyled from './styles';
import HomePageCoffeeShopsList from '@/components/HomePageCoffeeShopsList';
import ImageCarousel from '@/components/ImageCarousel';
import Title from 'antd/es/typography/Title';

const HomePage = () => (
  <HomePageStyled>
    <HomePageHeader />
    <ImageCarousel />
    <Title level={2}>Find somewhere to go?</Title>
    <HomePageCoffeeShopsList />
  </HomePageStyled>
);

export default HomePage;
