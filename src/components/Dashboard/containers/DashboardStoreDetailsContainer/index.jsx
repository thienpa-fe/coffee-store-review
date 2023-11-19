import DashboardStoreDetailsContainerStyled from '@/components/Dashboard/containers/DashboardStoreDetailsContainer/styles';
import DashboardStoreInfoContainer from '@/components/Dashboard/containers/DashboardStoreInfoContainer';
import DashboardStorePhotosAlbumContainer from '@/components/Dashboard/containers/DashboardStorePhotosAlbumContainer';
import { Button, Col, Image, Row, Tabs } from 'antd';
import Title from 'antd/es/typography/Title';
import { FcAddImage } from 'react-icons/fc';

const DashboardStoreDetailsContainer = ({
  title,
  okBtnText,
  isEditStorePage,
}) => {
  const dashboardStoreDetailsTabs = [
    {
      tabName: 'Photos Album',
      data: (
        <DashboardStorePhotosAlbumContainer isEditStorePage={isEditStorePage} />
      ),
    },
    {
      tabName: 'Information',
      data: <DashboardStoreInfoContainer okBtnText={okBtnText} />,
    },
  ];

  return (
    <DashboardStoreDetailsContainerStyled>
      <Title level={2}>{title}</Title>
      <Row gutter={[64, 64]}>
        <Col xxl={6} xl={8} xs={24} className="avatar-store-col">
          {isEditStorePage ? (
            <>
              <Image
                className="avatar-store-img"
                alt="image.png"
                src="https://www.worldcoffeeportal.com/getattachment/a513032d-267c-4ad1-bfb1-97c1f625d2b2/King_Coffee_Store_Anaheim_California-(1).jpg.aspx?lang=en-GB&width=700&height=525"
                preview={false}
              />
              <Button type="primary" danger className="delete-store-btn">
                Delete
              </Button>
            </>
          ) : (
            <div className="avatar-store-upload">
              <FcAddImage className="avatar-store-upload-icon" />
            </div>
          )}
        </Col>
        <Col xxl={18} xl={16} xs={24}>
          <Tabs
            defaultActiveKey="1"
            centered
            items={dashboardStoreDetailsTabs.map(
              ({ tabName, data }, index) => ({
                label: tabName,
                key: index,
                children: data,
              }),
            )}
          />
        </Col>
      </Row>
    </DashboardStoreDetailsContainerStyled>
  );
};

export default DashboardStoreDetailsContainer;
