import HomePageCoffeeShopCard from '@/components/HomePage/HomePageCoffeeShopCard';
import HomePageCoffeeShopsListStyled from './styles';
import { Col, Row } from 'antd';
import { listStoresMock } from '@/data/ListStoresMock';
import dynamic from 'next/dynamic';

const HomePageCoffeeShopsList = () => {
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const shuffledListStores = shuffleArray(listStoresMock);

  return (
    <HomePageCoffeeShopsListStyled>
      <Row gutter={[32, 32]}>
        {shuffledListStores.length
          ? shuffledListStores.map((store) => (
              <Col xl={8} lg={12} key={store._id}>
                <HomePageCoffeeShopCard data={store} />
              </Col>
            ))
          : 'No Data'}
      </Row>
    </HomePageCoffeeShopsListStyled>
  );
};

export default dynamic(() => Promise.resolve(HomePageCoffeeShopsList), {
  ssr: false,
});
