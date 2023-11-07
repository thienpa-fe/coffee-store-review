import DetailsCoffeeShopCard from '@/components/DetailsPage/DetailsCoffeeShopCard';
import DetailsCoffeeShopsListStyled from './styles';

const DetailsCoffeeShopsList = () => (
  <DetailsCoffeeShopsListStyled>
    <div className="zone">
      <h2 className="title">HOT COFFE SHOPS</h2>
      <p className="introduct">introduct coffee shop</p>
    </div>
    <div className="card-container">
      <DetailsCoffeeShopCard />
      <DetailsCoffeeShopCard />
      <DetailsCoffeeShopCard />
      <DetailsCoffeeShopCard />
      <DetailsCoffeeShopCard />
      <DetailsCoffeeShopCard />
      <DetailsCoffeeShopCard />
    </div>
  </DetailsCoffeeShopsListStyled>
);

export default DetailsCoffeeShopsList;
