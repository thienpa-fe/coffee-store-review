'use client';

import HomePageHeader from '@/components/HomePageHeader';
import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import HomePageStyled from './styles';
import HomePageCoffeeShopsList from '@/components/HomePageCoffeeShopsList';

const HomePage = () => (
  <HomePageStyled>
    <HomePageHeader />
    <HomePageCoffeeShopsList />
  </HomePageStyled>
);

export default HomePage;
