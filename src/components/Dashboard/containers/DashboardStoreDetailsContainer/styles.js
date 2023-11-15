import styled from 'styled-components';

const DashboardStoreDetailsContainerStyled = styled.div`
  padding: 30px;
  overflow: hidden;

  .ant-tabs {
    width: 630px;
  }

  .ant-tabs-nav {
    width: 300px;
    margin: 0 auto !important;
  }

  .avatar-store-img,
  .avatar-store-upload {
    height: 500px !important;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 90px;
    background: teal;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  .delete-store-btn {
    margin-top: 30px;
    width: 100%;
  }

  .avatar-store-upload-icon {
    font-size: 100px;
  }

  @media only screen and (max-width: 1366px) {
    .avatar-store-img,
    .avatar-store-upload {
      height: 400px !important;
    }
  }

  @media only screen and (max-width: 1024px) {
    .avatar-store-img,
    .avatar-store-upload,
    .delete-store-btn {
      width: 400px !important;
    }
  }

  @media only screen and (max-width: 375px) {
    .ant-tabs {
      width: 250px;
    }

    .avatar-store-img,
    .avatar-store-upload,
    .delete-store-btn {
      width: 250px !important;
    }

    .avatar-store-img,
    .avatar-store-upload {
      height: 300px !important;
    }
  }
`;

export default DashboardStoreDetailsContainerStyled;
