import styled from 'styled-components';

const LoginButtonStyled = styled.div`
  display: flex;
  align-items: center;

  .login-btn {
    margin-left: 10px;
    padding: 15px 20px;
    border: none;
    outline: none;
    background: #6f4e37;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }

  .user-login-info {
    display: flex;
    justify-content: center;
    align-items: center;

    & > .avatar-user-login {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid gray;
      margin-right: 10px;

      &:hover {
        cursor: pointer;
      }
    }

    & > .user-name {
      font-weight: bold;
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .login-btn {
      padding: 10px 10px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 375px) {
    .login-btn {
      padding: 5px 10px;
      font-size: 16px;
      position: absolute;
      right: 0;
      top: -30px;
    }

    .user-login-info {
      position: absolute;
      right: 0;
      top: -30px;

      & > .avatar-user-login {
        width: 25px;
        height: 25px;
      }

      & > .user-name {
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;

export default LoginButtonStyled;
