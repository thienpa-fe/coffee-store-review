import styled from 'styled-components';

const HomePageCoffeeShopsListStyled = styled.div`
  margin-top: 30px;
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 10px;
  }

  @media (max-width: 375px) {
    margin-top: 15px;
    grid-gap: 20px;
  }
`;

export default HomePageCoffeeShopsListStyled;
