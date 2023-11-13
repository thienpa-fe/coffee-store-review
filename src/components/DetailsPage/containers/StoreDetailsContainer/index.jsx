import DetailsInformationCoffeeShop from '@/components/DetailsPage/DetailsInformationCoffeeShop';
import StoreDetailsTabs from '@/components/DetailsPage/StoreDetailsTabs';
import StoreDetailsContainerStyled from '@/components/DetailsPage/containers/StoreDetailsContainer/styles';
import { Col, Image, Row } from 'antd';
import { AiFillStar } from 'react-icons/ai';

const StoreDetailsContainer = () => (
  <StoreDetailsContainerStyled>
    <Row gutter={[64, 0]}>
      <Col xxl={7} xl={8} lg={9}>
        <Image
          src="https://toplistvietnam.com/upload/media/entries/2023-02/12/445-entry-0-1676211572.jpg"
          alt="coffee-store.png"
          preview={false}
        />
        {true ? <AiFillStar className="favorite-icon" /> : null}
      </Col>
      <Col xxl={17} xl={16} lg={15}>
        <DetailsInformationCoffeeShop />
      </Col>
    </Row>
    <StoreDetailsTabs />
  </StoreDetailsContainerStyled>
);

export default StoreDetailsContainer;
