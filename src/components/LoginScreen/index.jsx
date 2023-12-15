import Image from 'next/image';
import { LogoStyled } from '@/components/HomePage/HomePageHeaderNavbar/styles';
import LoginScreenStyled from './styles';
import { Button, ConfigProvider, Select } from 'antd';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const LoginScreen = () => {
  const session = useSession();
  const [redirectLogin, setRedirectLogin] = useState('/');

  const selectMenu = [
    {
      value: 'Homepage',
      label: 'Homepage',
    },
    {
      value: 'Dashboard',
      label: 'Dashboard',
    },
  ];

  const handleChange = (value) => {
    if (value === 'Dashboard') {
      setRedirectLogin('/dashboard');
    } else {
      setRedirectLogin('/');
    }
  };

  return (
    <LoginScreenStyled>
      <div className="login-container">
        <h1 className="title">LOGIN</h1>
        <form className="login">
          <div className="input-box">
            <input type="text" placeholder="username" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" />
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#14b4c8',
              },
            }}
          >
            <Button type="primary" block>
              Login
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
            <Button
              onClick={() => signIn('google', { callbackUrl: redirectLogin })}
            >
              <Image
                className="icon8"
                width="60"
                height="60"
                src="https://img.icons8.com/color/48/gmail-new.png"
                alt="gmail-new"
              />
            </Button>
          </div>

          <Select
            className="select-menu"
            defaultValue="Homepage"
            onChange={handleChange}
            options={selectMenu}
          />
        </form>
      </div>
      <LogoStyled
        src="/images/cf-icon.png"
        alt="logo.png"
        className="icon-cf"
      />
    </LoginScreenStyled>
  );
};

export default LoginScreen;
