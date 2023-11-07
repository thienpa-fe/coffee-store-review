import HomePageCoffeeShopCard from '@/components/HomePage/HomePageCoffeeShopCard';
import HomePageCoffeeShopsListStyled from './styles';
import { Col, Row } from 'antd';

const HomePageCoffeeShopsList = () => (
  <HomePageCoffeeShopsListStyled>
    <Row gutter={[32, 32]}>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
      <Col xxl={{ span: 6 }} xl={{ span: 8 }} lg={{ span: 12 }}>
        <HomePageCoffeeShopCard />
      </Col>
    </Row>
  </HomePageCoffeeShopsListStyled>
);

export default HomePageCoffeeShopsList;
