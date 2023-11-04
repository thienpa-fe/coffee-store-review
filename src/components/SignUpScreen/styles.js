import styled from 'styled-components';

const SignUpScreenStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .sign-up-container {
    width: 100%;
    max-width: 420px;
    text-align: center;
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

  .icon-cf {
    position: absolute;
    top: 50px;
    left: 20px;
  }

  .input-box {
    display: flex;
  }

  .input-box > input {
    width: 100%;
    height: 40px;
    margin: 20px 0;
    padding: 5px;
    outline: none;
    border-radius: 8px;
    font-size: 20px;
    border: 1px solid #808080;
    &:focus {
      border: 2px solid #333333a3;
    }
    @media only screen and (max-width: 1366px) {
      border-radius: 4px;
      height: 30px;
      font-size: 18px;
      margin: 15px 0;
    }
    @media only screen and (max-width: 1024px) {
      border-radius: 4px;
      height: 24px;
      font-size: 16px;
      margin: 12px 0;
    }
    @media only screen and (max-width: 375px) {
      border-radius: 4px;
      height: 20px;
      font-size: 14px;
      margin: 12px 0;
    }
  }

  ::-webkit-input-placeholder {
    color: #808080;
    font-size: 20px;
    font-style: italic;
    @media only screen and (max-width: 1366px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 14px;
    }
  }

  .row-input {
    display: flex;
    column-gap: 10px;
    &:first-child {
      display: flex;
    }
  }

  .ant-btn-primary {
    margin-top: 20px;
    height: 60px;
    color: black;
    border: 2px solid #808080;
    font-size: 20px;
    @media only screen and (max-width: 1366px) {
      margin-top: 10px;
      height: 50px;
      font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
      height: 40px;
    }
  }

  .ant-btn-link {
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
  }

  .ant-btn-default {
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
      margin-top: 10px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 0;
    }
    @media only screen and (max-width: 375px) {
      margin-top: 30px;
    }
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
`;

export default SignUpScreenStyled;
