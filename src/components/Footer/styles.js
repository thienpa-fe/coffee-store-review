import styled from 'styled-components';

const FooterStyled = styled.div`
  width: calc(100% + 160px);
  margin-left: -80px;
  padding-left: 20px;
  margin-bottom: -20px;
  margin-top: 40px;
  background-color: #6f4e36;
  @media only screen and (max-width: 375px) {
    width: calc(100% + 40px);
    margin-left: -40px;
    padding-left: 20px;
  }

  .ant-typography {
    margin-top: 5px;
    color: white;
  }

  .container {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
  }

  .footer-top {
    margin-right: 20px;
    @media only screen and (max-width: 375px) {
      margin-right: 5px;
    }
  }

  .ant-btn {
    position: relative;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    &:last-child {
      margin-left: 1px;
    }
    background-color: #6f4e36;
    margin-right: 10px;
  }

  .icon8 {
    position: absolute;
    left: 0;
    top: 0;
  }

  .footer-bottom {
    margin-top: 30px;
    margin-left: 20px;
    color: white;
    padding-bottom: 16px;
    @media only screen and (max-width: 375px) {
      display: block;
      margin-top: 20px;
    }
  }
`;

export default FooterStyled;
