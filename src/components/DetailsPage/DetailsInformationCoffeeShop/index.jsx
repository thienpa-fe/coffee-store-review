import DetailsInformationCoffeeShopStyled from './styles';
import Title from 'antd/es/typography/Title';
import { Divider } from 'antd';

const DetailsInformationCoffeeShop = () => (
  <DetailsInformationCoffeeShopStyled>
    <Title level={2}>Highland Coffee</Title>
    <p>32 images</p>
    <p className="store-address">173 Lê Hồng Phong, Đà Nẵng</p>
    <div className="store-statistics">
      3,780 reviews <Divider type="vertical" /> 1,200 reactions
    </div>
    <p>Open: 07:00 - 22:00</p>
  </DetailsInformationCoffeeShopStyled>
);

export default DetailsInformationCoffeeShop;
