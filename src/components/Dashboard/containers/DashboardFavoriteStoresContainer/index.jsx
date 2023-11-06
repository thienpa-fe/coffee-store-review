import FavoriteStoresDataTable from '@/components/Dashboard/FavoriteStoresDataTable';
import Title from '@/components/Dashboard/common/Title';
import DashboardFavoriteStoresContainerStyled from './styles';

const DashboardFavoriteStoresContainer = () => (
  <DashboardFavoriteStoresContainerStyled>
    <Title content="Favorite Stores" />
    <FavoriteStoresDataTable />
  </DashboardFavoriteStoresContainerStyled>
);

export default DashboardFavoriteStoresContainer;
