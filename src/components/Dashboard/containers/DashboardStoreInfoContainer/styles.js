import styled from 'styled-components';

const DashboardStoreInfoContainerStyled = styled.div`
  .ant-form {
    padding-bottom: 80px;
    margin-top: 30px;
  }

  .ant-form-item-required::before {
    content: none !important;
  }

  .ant-form-item-label {
    text-align: start !important;
  }

  .ant-picker,
  .ant-input-number {
    width: 100%;
  }

  .input-number-col {
    padding-left: 16px;
  }

  .toggle {
    margin-left: 75px;
  }

  .form-btn {
    padding: 0 50px;
  }

  .actions-bar {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1366px) {
    .toggle {
      margin-left: 60px;
    }
  }

  @media only screen and (max-width: 375px) {
    .form-btn {
      padding: 0 20px;
    }
  }
`;

export default DashboardStoreInfoContainerStyled;
