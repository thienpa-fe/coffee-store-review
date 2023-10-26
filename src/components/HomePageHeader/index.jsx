import { HomePageHeaderStyled } from './styles';
import HomePageHeaderNavbar from '../HomePageHeaderNavbar';
import LoginButton from '../LoginButton';

const HomePageHeader = () => (
  <HomePageHeaderStyled>
    <HomePageHeaderNavbar />
    <LoginButton />
  </HomePageHeaderStyled>
);

export default HomePageHeader;
