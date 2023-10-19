import { signIn, signOut, useSession } from 'next-auth/react';
import HomePageSocialNetworkBarStyled from './styles';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa6';
import UserLoginInformation from '../UserLoginInformation';

const HomePageSocialNetworkBar = () => {
  const session = useSession();

  return (
    <HomePageSocialNetworkBarStyled>
      <FaFacebookF className="social-network-item" />
      <FaTwitter className="social-network-item" />
      <FaYoutube className="social-network-item" />
      <FaInstagram className="social-network-item" />
      {session.status === 'authenticated' ? (
        <>
          <UserLoginInformation session={session} />
          <button className="logout-btn" onClick={() => signOut()}>
            Logout
          </button>
        </>
      ) : (
        <button className="login-btn" onClick={() => signIn('Google')}>
          Login
        </button>
      )}
    </HomePageSocialNetworkBarStyled>
  );
};

export default HomePageSocialNetworkBar;
