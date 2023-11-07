import styled from 'styled-components';

const HomePageStyled = styled.div`
  padding: 20px 20px 0;
  max-width: 1280px;
  margin: 0 auto;

  .ant-typography {
    margin-top: 70px;
    text-align: center;
  }

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export default HomePageStyled;
