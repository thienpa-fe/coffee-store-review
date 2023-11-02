import React from 'react';
import DashboardStatisticStyled from './styles';
import Title from 'antd/es/typography/Title';
import StatisticTabs from '../StatisticTabs';

const DashboardStatistic = () => (
  <DashboardStatisticStyled>
    <Title level={2}>Statistic</Title>
    <StatisticTabs />
  </DashboardStatisticStyled>
);

export default DashboardStatistic;
