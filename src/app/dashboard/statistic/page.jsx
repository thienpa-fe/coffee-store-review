'use client';

import DashboardSidebar from '@/components/DashboardSidebar';
import StatisticStyled from './styles';
import DashboardStatistic from '@/components/DashboardStatistic';

const statistic = () => (
  <StatisticStyled>
    <DashboardSidebar />
    <DashboardStatistic />
  </StatisticStyled>
);

export default statistic;
