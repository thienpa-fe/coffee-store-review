import MyStoresDataTable from '../MyStoresDataTable';
import Title from '../Title';
import DashboardMyStoresStyled from './styles';

const DashboardMyStores = () => (
  <DashboardMyStoresStyled>
    <Title content="Welcomeback, username!" />
    <MyStoresDataTable />
  </DashboardMyStoresStyled>
);
export default DashboardMyStores;
