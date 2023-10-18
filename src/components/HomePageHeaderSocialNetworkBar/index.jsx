import HomePageSocialNetworkBarStyled from './styles';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa6';

const HomePageSocialNetworkBar = () => (
  <HomePageSocialNetworkBarStyled>
    <FaFacebookF className="social-network-item" />
    <FaTwitter className="social-network-item" />
    <FaYoutube className="social-network-item" />
    <FaInstagram className="social-network-item" />
    <button className="login-btn">Login</button>
  </HomePageSocialNetworkBarStyled>
);

export default HomePageSocialNetworkBar;
