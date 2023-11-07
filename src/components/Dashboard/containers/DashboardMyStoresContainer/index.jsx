import MyStoresDataTable from '@/components/Dashboard/MyStoresDataTable';
import DashboardMyStoresContainerStyled from './styles';
import Title from '@/components/Dashboard/common/Title';

const DashboardMyStoresContainer = () => (
  <DashboardMyStoresContainerStyled>
    <Title content="Welcomeback, username!" />
    <MyStoresDataTable />
  </DashboardMyStoresContainerStyled>
);
export default DashboardMyStoresContainer;
