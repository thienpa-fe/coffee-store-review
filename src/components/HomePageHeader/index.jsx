import React from 'react';
import { HomePageHeaderStyled } from './styles';
import HomePageHeaderNavbar from '../HomePageHeaderNavbar';
import HomePageSocialNetworkBar from '../HomePageHeaderSocialNetworkBar';

const HomePageHeader = () => {
  return (
    <HomePageHeaderStyled>
      <HomePageHeaderNavbar />
      <HomePageSocialNetworkBar />
    </HomePageHeaderStyled>
  );
};

export default HomePageHeader;
