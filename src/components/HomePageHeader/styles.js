const { default: styled } = require('styled-components');

export const HomePageHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-direction: column;
    position: relative;
  }
`;
