import React from 'react';
import HomePageSocialNetworkBarStyled from './styles';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa6';

const HomePageSocialNetworkBar = () => {
  return (
    <HomePageSocialNetworkBarStyled>
      <FaFacebookF className="social-network-item" />
      <FaTwitter className="social-network-item" />
      <FaYoutube className="social-network-item" />
      <FaInstagram className="social-network-item" />
      <button className="hire-me-btn">HIRE ME</button>
    </HomePageSocialNetworkBarStyled>
  );
};

export default HomePageSocialNetworkBar;
