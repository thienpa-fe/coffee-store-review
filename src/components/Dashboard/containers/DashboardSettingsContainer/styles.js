import styled from 'styled-components';

const DashboardSettingsContainerStyled = styled.div`
  padding: 30px 60px 30px 280px;

  .ant-form-item {
    margin-top: 100px;
  }

  .ant-select-selector {
    border: 2px solid #808080 !important;
  }

  @media only screen and (max-width: 375px) {
    padding-left: 70px;
    padding-right: 30px;
  }
`;

export default DashboardSettingsContainerStyled;
