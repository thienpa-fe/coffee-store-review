import styled from 'styled-components';

export const HomePageHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`;
