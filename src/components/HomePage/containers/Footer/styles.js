import styled from 'styled-components';
import { maxWidthContent } from '@/app/styles/variables';

const FooterStyled = styled.div`
  margin-top: 40px;
  background-color: #6f4e36;

  .ant-typography {
    margin-top: 5px;
    color: white;
  }

  .container {
    max-width: ${maxWidthContent};
    padding: 20px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .ant-btn {
    position: relative;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;

    &:last-child {
      margin-left: 10px;
    }
    background-color: #6f4e36;
  }

  .icon8 {
    position: absolute;
    left: 0;
    top: 0;
  }

  .footer-bottom {
    max-width: ${maxWidthContent};
    margin: 30px auto 0;
    color: white;
    padding: 0 20px 16px;

    @media only screen and (max-width: 375px) {
      display: block;
      margin-top: 20px;
    }
  }
`;

export default FooterStyled;
