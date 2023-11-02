import React from 'react';
import CoffeeStoreStatisticStyled from './styles';
import { Card, Col, Row, Statistic } from 'antd';
import CitysBarChart from '../CitysBarChart';
import CoffeeStoresPieChart from '../CoffeeStoresPieChart';
import CountUp from 'react-countup';

const CoffeeStoreStatistic = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <CoffeeStoreStatisticStyled>
      <Row gutter={[64, 32]}>
        <Col xxl={8} xl={9} lg={24} className="your-stores-statistic">
          <CoffeeStoresPieChart />
          <Card className="stores-statistic-card">
            <Row gutter={16}>
              <Col span={12}>
                <Statistic
                  title="Your store"
                  value={400}
                  formatter={formatter}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="All stores"
                  value={1600}
                  precision={2}
                  formatter={formatter}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xxl={16} xl={15} lg={24}>
          <CitysBarChart />
        </Col>
      </Row>
    </CoffeeStoreStatisticStyled>
  );
};

export default CoffeeStoreStatistic;
