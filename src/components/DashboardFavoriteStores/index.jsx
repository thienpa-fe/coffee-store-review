import DashboardFavoriteStoresStyled from './styles';
import Title from '../Title';
import FavoriteStoresDataTable from '../FavoriteStoresDataTable';

const DashboardFavoriteStores = () => (
  <DashboardFavoriteStoresStyled>
    <Title content="Favorite Stores" />
    <FavoriteStoresDataTable />
  </DashboardFavoriteStoresStyled>
);

export default DashboardFavoriteStores;
