import styled from 'styled-components';

const DashboardSidebarMenuStyled = styled.div`
  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .user-login-info {
    margin: 20px 0 20px 20px;
    font-size: 25px;
  }

  .ant-menu-item {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .ant-menu {
    margin-top: 50px;
  }

  .ant-menu-item-icon {
    width: 25px;
    height: 25px;
  }

  @media only screen and (max-width: 375px) {
    .ant-menu-title-content {
      display: none;
    }

    .ant-menu-item-icon {
      margin-right: 0;
    }
  }
`;

export default DashboardSidebarMenuStyled;
