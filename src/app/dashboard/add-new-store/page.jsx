'use client';

import DashboardStoreDetailsContainer from '@/components/Dashboard/containers/DashboardStoreDetailsContainer';

const AddNewStore = () => (
  <>
    <DashboardStoreDetailsContainer
      title="Add new coffee store"
      okBtnText="Create"
      isEditStorePage={false}
    />
  </>
);

export default AddNewStore;
