import Image from 'next/image';
import FooterStyled from './styles';
import { Button } from 'antd';
import Title from 'antd/es/typography/Title';

const Footer = () => (
  <FooterStyled>
    <div className="container">
      <Title level={3}>Coffee Store Review</Title>
      <div className="footer-top">
        <Button>
          <Image
            className="icon8"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/48/facebook--v1.png"
            alt="facebook"
          />
        </Button>
        <Button>
          <Image
            className="icon8"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/48/apple-mail.png"
            alt="gmail-new"
          />
        </Button>
      </div>
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
