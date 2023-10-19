import { HomePageHeaderStyled } from './styles';
import HomePageHeaderNavbar from '../HomePageHeaderNavbar';
import HomePageSocialNetworkBar from '../HomePageHeaderSocialNetworkBar';

const HomePageHeader = () => (
  <HomePageHeaderStyled>
    <HomePageHeaderNavbar />
    <HomePageSocialNetworkBar />
  </HomePageHeaderStyled>
);

export default HomePageHeader;
