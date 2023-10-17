import React from 'react';
import { HomePageHeaderNavbarStyled, LogoStyled } from './styles';
import Link from 'next/link';

const HomePageHeaderNavbar = () => {
  return (
    <HomePageHeaderNavbarStyled>
      <LogoStyled src="/images/cf-icon.png" alt="logo.png" />
      <ul className="navbar-list">
        <li>
          <Link href="/homepage" className="navbar-item">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/homepage" className="navbar-item">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/homepage" className="navbar-item">
            SERVICES
          </Link>
        </li>
        <li>
          <Link href="/homepage" className="navbar-item">
            CONTACT
          </Link>
        </li>
      </ul>
    </HomePageHeaderNavbarStyled>
  );
};

export default HomePageHeaderNavbar;
