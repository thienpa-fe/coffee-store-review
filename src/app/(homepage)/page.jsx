'use client';

import HomePageStyled from './styles';
import Footer from '@/components/HomePage/containers/Footer';
import ImageCarousel from '@/components/HomePage/ImageCarousel';
import Title from 'antd/es/typography/Title';
import HomePageCoffeeShopsList from '@/components/HomePage/containers/HomePageCoffeeShopsList';

const HomePage = () => (
  <>
    <HomePageStyled>
      <ImageCarousel />
      <Title level={2}>Find somewhere to go?</Title>
      <HomePageCoffeeShopsList />
    </HomePageStyled>
    <Footer />
  </>
);

export default HomePage;
