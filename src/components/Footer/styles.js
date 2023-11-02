import styled from 'styled-components';

const FooterStyled = styled.div`
  padding-left: 20px;
  margin-top: 5px;
  background-color: #6f4e36;

  .ant-typography {
    margin-top: 5px;
  }

  .container {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: #808080;
    padding-bottom: 16px;
    @media only screen and (max-width: 375px) {
      margin-top: 20px;
    }
  }
`;

export default FooterStyled;
