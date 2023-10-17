const { default: styled } = require('styled-components');

const HomePageCoffeeShopsListStyled = styled.div`
  margin-top: 80px;
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  column-gap: 40px;
  row-gap: 60px;
`;

export default HomePageCoffeeShopsListStyled;
