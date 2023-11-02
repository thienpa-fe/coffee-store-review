import SignUpScreenStyled from './styles';
import { LogoStyled } from '../HomePageHeaderNavbar/styles';
import { Button, ConfigProvider } from 'antd';
import Image from 'next/image';

const SignUpScreen = () => (
  <SignUpScreenStyled>
    <div className="sign-up-container">
      <h1 className="title">SIGN UP</h1>
      <form className="sign-up">
        <div className="input-container">
          <div className="row-input">
            <div className="input-box">
              <input
                type="text"
                placeholder="First name"
                id=""
                className="first-name"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Last name"
                id=""
                className="last-name"
              />
            </div>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Cofirm password" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Address" />
          </div>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#14b4c8',
            },
          }}
        >
          <Button type="primary" block>
            Create account
          </Button>
        </ConfigProvider>

        <div className="row-sign-up">
          <p> New user ?</p>
          <Button type="link">
            <ins>Sign up</ins>
          </Button>
        </div>
        <div className="icon-login-container">
          <Button>
            <Image
              className="icon8"
              width="60"
              height="60"
              src="https://img.icons8.com/color/96/facebook.png"
              alt="facebook"
            />
          </Button>
          <Button>
            <Image
              className="icon8"
              width="60"
              height="60"
              src="https://img.icons8.com/color/48/gmail-new.png"
              alt="gmail-new"
            />
          </Button>
        </div>
      </form>
    </div>
    <LogoStyled src="/images/cf-icon.png" alt="logo.png" className="icon-cf" />
  </SignUpScreenStyled>
);
export default SignUpScreen;
