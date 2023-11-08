import { styled } from 'styled-components';

const DashboardSidebarFooterMenuStyled = styled.div`
  .ant-menu-item {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .ant-menu {
    margin-top: 50px;
    border: none;
  }
  .ant-menu-root {
    border: none;
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

export default DashboardSidebarFooterMenuStyled;
