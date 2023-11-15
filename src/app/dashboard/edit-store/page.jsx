'use client';

import DashboardStoreDetailsContainer from '@/components/Dashboard/containers/DashboardStoreDetailsContainer';

const EditStore = () => (
  <>
    <DashboardStoreDetailsContainer
      title="Edit store"
      okBtnText="Update"
      isEditStorePage={true}
    />
  </>
);

export default EditStore;
