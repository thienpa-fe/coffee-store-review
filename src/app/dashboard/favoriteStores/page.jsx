'use client';

import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardFavoriteStores from '@/components/DashboardFavoriteStores';
import FavoriteStoresStyled from './styles';

const FavoriteStores = () => (
  <FavoriteStoresStyled>
    <DashboardSidebar />
    <DashboardFavoriteStores />
  </FavoriteStoresStyled>
);

export default FavoriteStores;
