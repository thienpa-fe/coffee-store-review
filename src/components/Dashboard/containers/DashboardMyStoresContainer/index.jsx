import MyStoresDataTable from '../../MyStoresDataTable';
import Title from '../../common/Title';
import DashboardMyStoresContainerStyled from './styles';

const DashboardMyStoresContainer = () => (
  <DashboardMyStoresContainerStyled>
    <Title content="Welcomeback, username!" />
    <MyStoresDataTable />
  </DashboardMyStoresContainerStyled>
);
export default DashboardMyStoresContainer;
