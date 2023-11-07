'use client';
import DetailPageStyled from './styles';
import DetailsInformationCoffeeShop from '@/components/DetailsPage/DetailsInformationCoffeeShop';
import DetailsCoffeeShopsList from '@/components/DetailsPage/containers/DetailsCoffeeShopsList';

const DetailsPage = () => (
  <DetailPageStyled>
    <DetailsInformationCoffeeShop />
    <DetailsCoffeeShopsList />
  </DetailPageStyled>
);

export default DetailsPage;
