import Title from '../../common/Title';
import FavoriteStoresDataTable from '../../FavoriteStoresDataTable';
import DashboardFavoriteStoresContainerStyled from './styles';

const DashboardFavoriteStoresContainer = () => (
  <DashboardFavoriteStoresContainerStyled>
    <Title content="Favorite Stores" />
    <FavoriteStoresDataTable />
  </DashboardFavoriteStoresContainerStyled>
);

export default DashboardFavoriteStoresContainer;
