import styled from 'styled-components';

const LoginScreenStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .login-container {
    width: 100%;
    max-width: 420px;
    text-align: center;
    margin-top: 30px;
  }

  .title {
    font-size: 32px;
    font-weight: 900;
    margin: 20px 0;
    @media only screen and (max-width: 1024px) {
      margin: 15px 0;
      font-size: 30px;
    }
  }

  .login {
    margin-top: 40px;
    @media only screen and (max-width: 1366px) {
      margin-top: 15px;
    }
  }

  .input-box {
    display: flex;
  }

  .input-box > input {
    width: 100%;
    height: 60px;
    margin: 30px 0;
    padding: 5px;
    outline: none;
    border-radius: 12px;
    font-size: 26px;
    border: 1px solid #808080;
    &:focus {
      border: 2px solid #333333a3;
    }
    @media only screen and (max-width: 1366px) {
      height: 50px;
      margin-top: 15px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 10px;
      height: 40px;
      border-radius: 6px;
    }
  }

  ::-webkit-input-placeholder {
    color: #808080;
    font-size: 20px;
    font-style: italic;
  }

  .ant-btn-primary {
    margin-top: 60px;
    height: 60px;
    color: black;
    border: 2px solid #808080;
    font-size: 20px;
    @media only screen and (max-width: 1366px) {
      margin-top: 30px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 20px;
    }
    background-color: #14b4c8;
  }

  .ant-btn-link {
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
  }

  .row-sign-up {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    font-size: 20px;
    margin-top: 10px;
    @media only screen and (max-width: 1366px) {
      margin-top: 0;
      font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 0px;
      font-size: 16px;
    }
    @media only screen and (max-width: 375px) {
      margin-top: 0;
      font-size: 16px;
    }
  }

  Button > ins {
    font-size: 20px;
    @media only screen and (max-width: 1366px) {
      margin-top: 0;
      font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 0;
      font-size: 16px;
    }
    @media only screen and (max-width: 375px) {
      margin-top: 0;
      font-size: 16px;
    }
  }

  .icon-login-container {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    @media only screen and (max-width: 1366px) {
      margin-top: 30px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 0;
    }
    @media only screen and (max-width: 375px) {
      margin-top: 30px;
    }
  }

  .login > div > .ant-btn-default {
    position: relative;
    display: flex;
    justify-content: center;
    width: 48%;
    height: 60px;
    border-radius: 12px;
    border: 2px solid #808080;
    outline: none;
    margin-top: 15px;
    transition: all, 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    @media only screen and (max-width: 1366px) {
      margin-top: 10px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 5;
    }
    @media only screen and (max-width: 375px) {
      margin-top: 0;
    }
  }

  .icon8 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .icon-cf {
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 375px) {
      position: absolute;
      object-fit: contain;
      top: 0;
      left: 0;
    }
  }

  .btn {
    margin-top: 250px;
    text-align: end;
    @media only screen and (max-width: 1366px) {
      margin-top: 90px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 50px;
    }
  }
  .ant-dropdown-trigger {
    position: absolute;
    right: 0;
    background-color: #14b4c8;
  }
`;

export default LoginScreenStyled;
