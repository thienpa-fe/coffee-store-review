import Image from 'next/image';
import FooterStyled from './styles';
import Title from '../Title';
import { Button } from 'antd';

const Footer = () => (
  <FooterStyled>
    <div className="footer-top">
      <Button>
        <Image
          className="icon8"
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/48/facebook--v1.png"
          alt="facebook"
        />
      </Button>
      <Button>
        <Image
          className="icon8"
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/48/apple-mail.png"
          alt="gmail-new"
        />
      </Button>
    </div>
    <div className="footer-between">
      <Title content="Coffee Store Review" />
    </div>
    <div className="footer-bottom">
      <span className="footer-bottom">
        Sign 2022. This is made with &hearts; by Thien Pham, Tam Phan and Canh
        Tran
      </span>
    </div>
  </FooterStyled>
);

export default Footer;
