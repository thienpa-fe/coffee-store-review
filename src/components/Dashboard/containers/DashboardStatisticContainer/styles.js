import styled from 'styled-components';

const DashboardStatisticContainerStyled = styled.div`
  padding: 30px;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    padding-left: 40px;
  }

  @media only screen and (max-width: 1024px) {
    padding-left: 40px;
  }

  @media only screen and (max-width: 375px) {
    padding-left: 80px;
    padding-right: 30px;
    overflow: scroll;
  }
`;

export default DashboardStatisticContainerStyled;
