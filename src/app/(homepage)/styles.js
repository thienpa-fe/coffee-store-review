import styled from 'styled-components';
import { maxWidthContent } from '@/app/styles/variables';

const HomePageStyled = styled.div`
  padding: 20px 20px 0;
  max-width: ${maxWidthContent};
  margin: 0 auto;

  .ant-typography {
    margin-top: 70px;
    text-align: center;
  }

  @media only screen and (max-width: 375px) {
    padding: 0 20px;
  }
`;

export default HomePageStyled;
