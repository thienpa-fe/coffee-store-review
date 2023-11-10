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

  @media only screen and (max-width: 375px) {
    .login-btn,
    .user-login-info {
      margin-top: 20px;
    }
  }
`;

export default LoginButtonStyled;
