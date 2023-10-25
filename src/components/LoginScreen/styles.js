import styled from 'styled-components';

const LoginScreenStyled = styled.div`
  .login-container {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .title {
    font-size: 36px;
    text-align: center;
    font-weight: 900;
    margin: 20px 0;
  }

  .loginform {
    text-align: center;
  }

  .login {
    width: 100%;
    max-width: 420px;
  }

  .input-box {
    display: flex;
    position: relative;
  }

  .input-box > input {
    margin: 25px 0;
    width: 100%;
    padding: 10px 20px 10px 10px;
    border: none;
    outline: none;
    border: 1px solid #808080;
    background: #8080803b;
    font-size: 20px;
    border-radius: 12px;
    &:focus {
      border: 2px solid #808080;
    }
    @media (max-width: 375px) {
      margin: 15px 0;
    }
  }

  ::-webkit-input-placeholder {
    color: #808080;
    font-size: 20px;
    width: 100%;
    font-style: italic;
  }

  .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }

  .btn-login {
    text-align: center;
    width: 100%;
  }

  .btn {
    margin: 30px 0;
    width: 100%;
    height: 45px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-align: center;
    transition: all, 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .sign-up {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    align-items: center;
  }

  .btn-sign-up {
    border: none;
    outline: none;
    color: blue;
    font-size: 16px;
    background: unset;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .icon-login-container {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }

  .icon-login {
    width: 48%;
    height: 60px;
    border-radius: 12px;
    border: none;
    outline: none;
    margin-top: 15px;
    transition: all, 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    &:first-child {
      color: blue;
    }
    &:last-child {
      color: red;
    }
  }

  .icon-click {
    width: 100%;
    height: 100%;
  }

  .icon-cf {
    width: 50px;
    position: absolute;
    top: 50px;
    @media (max-width: 375px) {
      position: absolute;
      width: 30px;
      top: 20px;
    }
  }

  .select {
    display: flex;
    justify-content: end;
    margin-top: 200px;
    & > select {
      padding: 10px;
      border-radius: 5px;
      border: 2px solid #00000057;
      transition: all, 0.5s;
      background: #1158f633;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
        scale: 1.1;
      }
    }
    @media (max-width: 375px) {
      margin: 50px;
      justify-content: center;
    }
  }
`;

export default LoginScreenStyled;
