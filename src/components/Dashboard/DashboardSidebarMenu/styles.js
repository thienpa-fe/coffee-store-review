import styled from 'styled-components';

const DashboardSidebarMenuStyled = styled.div`
  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .user-login-info {
    margin: 0 0 20px 20px;
  }

  .ant-menu-item {
    margin-bottom: 20px;
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
