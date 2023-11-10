import styled from 'styled-components';

const DashboardSidebarMenuStyled = styled.div`
  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .user-login-info {
    margin: 0 0 18px 18px;
  }

  .ant-menu-item {
    margin-bottom: 20px;
    @media only screen and (max-width: 1366px) {
      font-size: 25px;
      font-weight: 700;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .ant-menu {
    margin-top: 50px;
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
