'use client';

import Footer from '@/components/Footer';
import HomePageCoffeeShopsList from '@/components/HomePageCoffeeShopsList';
import HomePageHeader from '@/components/HomePageHeader';
import ImageCarousel from '@/components/ImageCarousel';
import Title from 'antd/es/typography/Title';
import HomePageStyled from './styles';

const HomePage = () => (
  <HomePageStyled>
    <HomePageHeader />
    <ImageCarousel />
    <Title level={2}>Find somewhere to go?</Title>
    <HomePageCoffeeShopsList />
    <Footer />
  </HomePageStyled>
);

export default HomePage;
