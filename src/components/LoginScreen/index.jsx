import { LogoStyled } from '../HomePageHeaderNavbar/styles';
import LoginScreenStyled from './styles';
import { AiFillFacebook } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BiSolidUser, BiSolidLockAlt } from 'react-icons/bi';

const LoginScreen = () => (
  <LoginScreenStyled>
    <div className="login-container">
      <form className="login">
        <h1 className="title">LOGIN</h1>
        <div className="input-box">
          <input type="text" placeholder="username" />
          <BiSolidUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" />
          <BiSolidLockAlt className="icon" />
        </div>
        <div className="btn-login">
          <button className="btn">Login</button>
        </div>
        <div className="sign-up">
          <p> New user ?</p> <button className="btn-sign-up">Sign up</button>
        </div>
        <div className="icon-login-container">
          <button className="icon-login">
            <AiFillFacebook className="icon-click" />
          </button>
          <button className="icon-login">
            <SiGmail className="icon-click" />
          </button>
        </div>
      </form>
    </div>
    <LogoStyled src="/images/cf-icon.png" alt="logo.png" className="icon-cf" />
    <div className="select">
      <select name="page" id="page">
        <option value="homepage">Homepage</option>
        <option value="page">Dashboard</option>
      </select>
    </div>
  </LoginScreenStyled>
);

export default LoginScreen;
