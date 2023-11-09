'use client';

import Footer from '@/components/Footer';
import HomePageCoffeeShopsList from '@/components/HomePageCoffeeShopsList';
import HomePageHeader from '@/components/HomePageHeader';
import ImageCarousel from '@/components/ImageCarousel';
import { getAllStore } from '@/requests/stores';
import Title from 'antd/es/typography/Title';
import { useEffect } from 'react';
import HomePageStyled from './styles';

const HomePage = () => {
  useEffect(() => {
    const fetchStores = async () => {
      const response = await getAllStore();
      console.log(response);
    };

    fetchStores();
  }, []);
  return (
    <HomePageStyled>
      <HomePageHeader />
      <ImageCarousel />
      <Title level={2}>Find somewhere to go?</Title>
      <HomePageCoffeeShopsList />
      <Footer />
    </HomePageStyled>
  );
};

export default HomePage;
