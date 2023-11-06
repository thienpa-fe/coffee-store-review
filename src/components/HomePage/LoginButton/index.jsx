import LoginButtonStyled from './styles';
import Image from 'next/image';

const LoginButton = () => (
  <LoginButtonStyled>
    {false ? (
      <div className="user-login-info">
        <Image
          src="https://taihinhanh.vn/wp-content/uploads/2021/06/Anh-avatar-cho-con-trai-Taihinhanh-vn-5.jpg"
          alt="avatar.png"
          className="avatar-user-login"
          width={1000}
          height={1000}
        />
        <span className="user-name">This is user name</span>
      </div>
    ) : (
      <button className="login-btn">Sign In / Sign Up</button>
    )}
  </LoginButtonStyled>
);

export default LoginButton;
