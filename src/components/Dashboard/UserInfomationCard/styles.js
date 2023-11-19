import styled from 'styled-components';

const UserInformationCardStyled = styled.div`
  margin-top: 50px;

  .ant-card {
    width: 100%;

    .ant-card-body {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .ant-avatar {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 375px) {
    .ant-card-body {
      flex-direction: column;
    }
  }
`;

export default UserInformationCardStyled;
