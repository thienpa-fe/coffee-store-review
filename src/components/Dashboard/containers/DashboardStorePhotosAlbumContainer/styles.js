import styled from 'styled-components';

const DashboardStorePhotosAlbumContainerStyled = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px 10px;
  margin-top: 30px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b6b6b;
    border-radius: 5px;
  }

  .ant-image,
  .upload-img-btn {
    width: 189px !important;
    height: 189px !important;
  }

  .upload-img-btn {
    margin: 0 8px !important;
  }

  .upload-icon {
    font-size: 100px;
  }

  .ant-image-img,
  .ant-image-mask {
    height: 100% !important;
    object-fit: cover;
    border-radius: 10px;
  }

  .delete-photo-icon {
    color: red;
    font-size: 20px;
    position: absolute;
    z-index: 1;
    top: -5px;
    right: 0;
    background-color: white;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      transition: all 0.2s;
    }
  }
`;

export default DashboardStorePhotosAlbumContainerStyled;
