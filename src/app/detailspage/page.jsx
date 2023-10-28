'use client';
import DetailPageStyled from './styles';
import DetailsInformationCoffeeShop from '@/components/DetailsInformationCoffeeShop';
import DetailsCoffeeShopsList from '@/components/DetailsCoffeeShopsList';

const DetailsPage = () => (
  <DetailPageStyled>
    <DetailsInformationCoffeeShop />
    <DetailsCoffeeShopsList />
  </DetailPageStyled>
);

export default DetailsPage;
