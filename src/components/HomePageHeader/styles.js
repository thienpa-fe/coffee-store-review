import styled from 'styled-components';

export const HomePageHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    flex-direction: column;
    position: relative;
  }
`;
