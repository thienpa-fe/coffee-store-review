import styled from 'styled-components';

const DashboardMyStoresContainerStyled = styled.div`
  padding: 30px 60px 0 0;

  @media only screen and (max-width: 1366px) {
    padding-left: 60px;
  }


  @media only screen and (max-width: 375px) {
    padding-left: 80px;
    padding-right: 30px;
    overflow: scroll;
  }
`;

export default DashboardMyStoresContainerStyled;
