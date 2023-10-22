'use client';
import DetailPageStyled from './styles';
import DetailsInformationCoffeeShop from '@/component/DetailsInformationCoffeeShop';
import DetailsCoffeeShopsList from '@/component/DetailsCoffeeShopsList';

const DetailsPage = () => (
  <DetailPageStyled>
    <DetailsInformationCoffeeShop />
    <DetailsCoffeeShopsList />
  </DetailPageStyled>
);

export default DetailsPage;
