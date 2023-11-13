import StoreDetailsTabsStyled from '@/components/DetailsPage/StoreDetailsTabs/styles';
import StoreLocation from '@/components/DetailsPage/StoreLocation';
import StorePhotosAlbum from '@/components/DetailsPage/StorePhotosAlbum';
import { Tabs } from 'antd';

const StoreDetailsTabs = () => {
  const storeDetailsTabs = [
    { tabName: 'Photos Album', data: <StorePhotosAlbum /> },
    { tabName: 'Location', data: <StoreLocation /> },
  ];

  return (
    <StoreDetailsTabsStyled>
      <Tabs
        defaultActiveKey="1"
        centered
        items={storeDetailsTabs.map(({ tabName, data }, index) => ({
          label: tabName,
          key: index,
          children: data,
        }))}
      />
    </StoreDetailsTabsStyled>
  );
};

export default StoreDetailsTabs;
