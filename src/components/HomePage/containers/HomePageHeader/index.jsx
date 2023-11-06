import HomePageHeaderNavbar from '@/components/HomePage/HomePageHeaderNavbar';
import { HomePageHeaderStyled } from './styles';
import LoginButton from '@/components/HomePage/LoginButton';

const HomePageHeader = () => (
  <HomePageHeaderStyled>
    <HomePageHeaderNavbar />
    <LoginButton />
  </HomePageHeaderStyled>
);

export default HomePageHeader;
