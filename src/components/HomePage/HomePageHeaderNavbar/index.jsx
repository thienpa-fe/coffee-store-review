import { HomePageHeaderNavbarStyled, LogoStyled } from './styles';
import Link from 'next/link';

const HomePageHeaderNavbar = () => (
  <HomePageHeaderNavbarStyled>
    <Link href="/">
      <LogoStyled src="/images/cf-icon.png" alt="logo.png" />
    </Link>

    <ul className="navbar-list">
      <li>
        <Link href="/" className="navbar-item">
          Home
        </Link>
      </li>
      <li>
        <Link href="/" className="navbar-item">
          Contact Us
        </Link>
      </li>
      <li>
        <Link href="/" className="navbar-item">
          Activities
        </Link>
      </li>
    </ul>
  </HomePageHeaderNavbarStyled>
);

export default HomePageHeaderNavbar;
