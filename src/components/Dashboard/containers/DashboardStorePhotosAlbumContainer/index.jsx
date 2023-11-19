import DashboardStorePhotosAlbumContainerStyled from '@/components/Dashboard/containers/DashboardStorePhotosAlbumContainer/styles';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Image, Modal, Row, Upload } from 'antd';
import { GoXCircleFill } from 'react-icons/go';
import ConfirmModal from '@/components/Dashboard/common/ConfirmModal';
import { AiFillPlusCircle } from 'react-icons/ai';

const DashboardStorePhotosAlbumContainer = ({ isEditStorePage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const photosList = [
    {
      id: '1',
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3f/c1/f1/kj-coffee-shop-es-un.jpg',
    },
    {
      id: '2',
      url: 'https://wholesale.methodicalcoffee.com/cdn/shop/articles/cafe_1024x.webp?v=1673986032',
    },
    {
      id: '3',
      url: 'https://cdn.5280.com/2023/06/HudsonHill_credit-Connor-Stehr-960x640.jpg',
    },
    {
      id: '4',
      url: 'https://vcdn1-english.vnecdn.net/2022/10/06/-9033-1665022447.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=YS_KF-mJl6iuSpKu2jd_eA',
    },
    {
      id: '1',
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3f/c1/f1/kj-coffee-shop-es-un.jpg',
    },
    {
      id: '2',
      url: 'https://wholesale.methodicalcoffee.com/cdn/shop/articles/cafe_1024x.webp?v=1673986032',
    },
    {
      id: '3',
      url: 'https://cdn.5280.com/2023/06/HudsonHill_credit-Connor-Stehr-960x640.jpg',
    },
    {
      id: '4',
      url: 'https://vcdn1-english.vnecdn.net/2022/10/06/-9033-1665022447.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=YS_KF-mJl6iuSpKu2jd_eA',
    },
    {
      id: '1',
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3f/c1/f1/kj-coffee-shop-es-un.jpg',
    },
    {
      id: '2',
      url: 'https://wholesale.methodicalcoffee.com/cdn/shop/articles/cafe_1024x.webp?v=1673986032',
    },
    {
      id: '3',
      url: 'https://cdn.5280.com/2023/06/HudsonHill_credit-Connor-Stehr-960x640.jpg',
    },
    {
      id: '4',
      url: 'https://vcdn1-english.vnecdn.net/2022/10/06/-9033-1665022447.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=YS_KF-mJl6iuSpKu2jd_eA',
    },
  ];

  return (
    <DashboardStorePhotosAlbumContainerStyled>
      <Row gutter={[16, 16]}>
        <Button className="upload-img-btn">
          <AiFillPlusCircle className="upload-icon" />
        </Button>

        {isEditStorePage &&
          photosList.map((photo, index) => (
            <Col xxl={8} key={index}>
              <Image alt="store-photo.png" src={photo.url} />
              <GoXCircleFill
                className="delete-photo-icon"
                onClick={handleClick}
              />
            </Col>
          ))}
      </Row>

      <ConfirmModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        title="Are you sure you want to delete this image?"
        content=""
        okText="Yes"
      />
    </DashboardStorePhotosAlbumContainerStyled>
  );
};

export default DashboardStorePhotosAlbumContainer;
