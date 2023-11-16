'use client';

import ImageCarousel from '@/components/HomePage/ImageCarousel';
import Footer from '@/components/HomePage/containers/Footer';
import HomePageCoffeeShopsList from '@/components/HomePage/containers/HomePageCoffeeShopsList';
import Title from 'antd/es/typography/Title';
import HomePageStyled from './styles';

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
