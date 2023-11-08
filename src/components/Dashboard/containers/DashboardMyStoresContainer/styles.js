import styled from 'styled-components';

const DashboardMyStoresContainerStyled = styled.div`
  padding-left: 30px 60px 30px 280px;

  @media only screen and (max-width: 1366px) {
    padding-left: 230px;
    padding-right: 25px;
  }

  @media only screen and (max-width: 375px) {
    padding-left: 80px;
    padding-right: 30px;
    overflow: scroll;
  }
`;

export default DashboardMyStoresContainerStyled;
