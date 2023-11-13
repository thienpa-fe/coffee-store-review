import HomePageCoffeeShopCard from '@/components/HomePage/HomePageCoffeeShopCard';
import HomePageCoffeeShopsListStyled from './styles';
import { Col, Row } from 'antd';

const HomePageCoffeeShopsList = () => (
  <HomePageCoffeeShopsListStyled>
    <Row gutter={[32, 32]}>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xl={8} lg={12}>
        <HomePageCoffeeShopCard />
      </Col>
    </Row>
  </HomePageCoffeeShopsListStyled>
);

export default HomePageCoffeeShopsList;
