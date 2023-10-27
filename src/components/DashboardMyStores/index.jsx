import MyStoresDataTable from '../MyStoresDataTable';
import Title from '../Title';
import DashboardMyStoresStyled from './styles';

const DashboardMyStores = () => (
  <DashboardMyStoresStyled>
    <Title content="Wellcomback, username!" />
    <MyStoresDataTable />
  </DashboardMyStoresStyled>
);
export default DashboardMyStores;
