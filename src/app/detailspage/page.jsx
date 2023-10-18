'use client';

import React from 'react'
import DetailPageStyled from './styles';
import DetailsInformationCoffeeShop from '@/component/DetailsInformationCoffeeShop';
import DetailsCoffeeShopsList from '@/component/DetailsCoffeeShopsList';

const DetailsPage = () => {
  return (
    <DetailPageStyled>
      <DetailsInformationCoffeeShop/>
      <DetailsCoffeeShopsList/>
    </DetailPageStyled>
  )
}

export default DetailsPage