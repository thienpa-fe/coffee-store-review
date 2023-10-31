import styled from 'styled-components';

const FooterStyled = styled.div`
  margin-top: 5px;
  .footer-top {
    display: flex;
    justify-content: flex-end;
  }

  .ant-btn {
    position: relative;
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    &:last-child {
      margin-left: 1px;
    }
  }

  .icon8 {
    position: absolute;
    left: 0;
    top: 0;
    margin: 4px;
  }

  .footer-between {
    margin-top: 10px;
  }

  .footer-bottom {
    margin-top: 50px;
    color: #808080;
  }
`;

export default FooterStyled;
