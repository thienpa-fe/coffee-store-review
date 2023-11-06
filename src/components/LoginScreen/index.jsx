import Image from 'next/image';
import { LogoStyled } from '../HomePage/HomePageHeaderNavbar/styles';
import LoginScreenStyled from './styles';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, ConfigProvider } from 'antd';

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
};

const items = [
  {
    label: 'Dashboard',
    key: '1',
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const LoginScreen = () => (
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
        <div className="btn">
          <Space wrap>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Hompage
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
        </div>
      </form>
    </div>
    <LogoStyled src="/images/cf-icon.png" alt="logo.png" className="icon-cf" />
  </LoginScreenStyled>
);

export default LoginScreen;
