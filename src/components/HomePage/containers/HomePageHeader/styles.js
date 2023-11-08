import { maxWidthContent } from '@/app/styles/variables';
import styled from 'styled-components';

const HomePageHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${maxWidthContent};
  margin: 0 auto;
  padding: 20px 20px 0;

  @media only screen and (max-width: 375px) {
    flex-direction: column;
    position: relative;
  }
`;

export default HomePageHeaderStyled;
