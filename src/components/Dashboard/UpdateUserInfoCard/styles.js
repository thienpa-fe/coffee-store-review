import styled from 'styled-components';

const UpdateUserInfoCardStyled = styled.div`
  margin-top: 50px;

  .ant-form {
    padding-bottom: 80px;
    margin-top: 30px;

    & > .ant-btn {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }

  .ant-form-item-required::before {
    content: none !important;
  }

  .ant-form-item-label {
    text-align: start !important;
  }
`;

export default UpdateUserInfoCardStyled;
