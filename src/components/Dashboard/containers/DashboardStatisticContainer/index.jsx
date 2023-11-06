import Title from 'antd/es/typography/Title';
import StatisticTabs from '../../StatisticTabs';
import DashboardStatisticContainerStyled from './styles';

const DashboardStatisticContainer = () => (
  <DashboardStatisticContainerStyled>
    <Title level={2}>Statistic</Title>
    <StatisticTabs />
  </DashboardStatisticContainerStyled>
);

export default DashboardStatisticContainer;
