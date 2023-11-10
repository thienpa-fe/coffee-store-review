import styled from 'styled-components';

const DashboardSettingsContainerStyled = styled.div`
  padding: 30px;

  .ant-form-item {
    margin-top: 100px;
  }

  .ant-select-selector {
    border: 2px solid #808080 !important;
  }

  @media only screen and (max-width: 1366px) {
    padding-left: 60px;
  }

  @media only screen and (max-width: 1024) {
    padding-left: 80px;
  }
  @media only screen and (max-width: 375px) {
    padding-left: 80px;
    padding-right: 30px;
    overflow: scroll;
  }
`;

export default DashboardSettingsContainerStyled;
