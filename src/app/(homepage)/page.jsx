'use client';

import HomePageHeader from '@/components/HomePage/containers/HomePageHeader';
import HomePageStyled from './styles';
import Footer from '@/components/HomePage/containers/Footer';
import ImageCarousel from '@/components/HomePage/ImageCarousel';
import Title from 'antd/es/typography/Title';
import HomePageCoffeeShopsList from '@/components/HomePage/containers/HomePageCoffeeShopsList';

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
