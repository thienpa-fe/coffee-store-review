import styled from 'styled-components';

const UserLoginInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .user-avatar {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-info {
    line-height: 30px;

    & > .user-name {
      font-weight: bold;
    }
  }

  @media (max-width: 1366px) {
    .user-avatar {
      width: 40px;
      height: 40px;
    }

    .user-info {
      line-height: 20px;
    }
  }

  @media (max-width: 375px) {
    .user-info {
      display: none;
    }

    .user-avatar {
      margin-right: 0;
    }
  }
`;

export default UserLoginInfoStyled;
