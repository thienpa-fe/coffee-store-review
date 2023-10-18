import { HomePageHeaderNavbarStyled, LogoStyled } from './styles';
import Link from 'next/link';

const HomePageHeaderNavbar = () => (
  <HomePageHeaderNavbarStyled>
    <LogoStyled src="/images/cf-icon.png" alt="logo.png" />
    <ul className="navbar-list">
      <li>
        <Link href="/" className="navbar-item">
          HOME
        </Link>
      </li>
      <li>
        <Link href="/" className="navbar-item">
          ABOUT
        </Link>
      </li>
      <li>
        <Link href="/" className="navbar-item">
          SERVICES
        </Link>
      </li>
      <li>
        <Link href="/" className="navbar-item">
          CONTACT
        </Link>
      </li>
    </ul>
  </HomePageHeaderNavbarStyled>
);

export default HomePageHeaderNavbar;
