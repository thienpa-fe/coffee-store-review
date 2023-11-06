import { Card, Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import CoffeeStoresBarChart from '../CoffeeStoresBarChart';
import ReviewsStatisticContainerStyled from './styles';

const ReviewsStatisticContainer = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <ReviewsStatisticContainerStyled>
      <Row gutter={[64, 32]}>
        <Col xxl={8} xl={9} lg={24}>
          <Card className="your-reviews-card">
            <Statistic title="Your reviews" value={350} formatter={formatter} />
          </Card>
          <Card>
            <Statistic title="All reviews" value={1600} formatter={formatter} />
          </Card>
        </Col>
        <Col xxl={16} xl={15} lg={24}>
          <CoffeeStoresBarChart />
        </Col>
      </Row>
    </ReviewsStatisticContainerStyled>
  );
};

export default ReviewsStatisticContainer;
