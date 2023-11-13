import { styled } from 'styled-components';

const DashboardSidebarFooterMenuStyled = styled.div`
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
