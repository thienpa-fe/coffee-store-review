import { styled } from 'styled-components';

const DashboardSidebarFooterMenuStyled = styled.div`
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
    border: none;
  }
  .ant-menu-root {
    border: none;
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

export default DashboardSidebarFooterMenuStyled;
