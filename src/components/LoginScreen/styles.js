import styled from 'styled-components';

const LoginScreenStyled = styled.div`
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
  }

  .title {
    font-size: 36px;
    text-align: center;
    font-weight: 900;
  }

  .loginform {
    text-align: center;
  }

  .login {
    width: 420px;
    margin-top: 30px;
  }

  .input-box {
    width: 420px;
    height: 50px;
    margin: 20px 0;
    position: relative;
  }

  .input-box > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border: 1px solid #808080;
    border-radius: 12px;
    background: #8080803b;
    font-size: 20px;
    padding: 5px 5px 5px 10px;
    &:focus {
      border: 2px solid #808080;
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
    right: 20px;
    top: 45%;
    transform: translate(-50%);
    font-size: 20px;
  }

  .btn-login {
    text-align: center;
    margin-top: 50px;
  }

  .btn {
    width: 50%;
    height: 45px;
    border-radius: 40px;
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
    margin-top: 20px;
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
  }

  .icon-login {
    width: 100px;
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

  .select {
    text-align: end;
    margin-top: 100px;
    > select {
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
  }
`;

export default LoginScreenStyled;
