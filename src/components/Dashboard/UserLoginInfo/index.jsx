import UserLoginInfoStyled from './styles';
import Image from 'next/image';

const UserLoginInfo = () => (
  <UserLoginInfoStyled>
    <Image
      src="https://vapa.vn/wp-content/uploads/2022/12/anh-avatar-ngau-nu-001.jpg"
      alt="avatar.png"
      width={1000}
      height={1000}
      className="user-avatar"
    />
    <div className="user-info">
      <p className="user-name">This is user name</p>
      <p className="user-permission">Admin</p>
    </div>
  </UserLoginInfoStyled>
);

export default UserLoginInfo;
