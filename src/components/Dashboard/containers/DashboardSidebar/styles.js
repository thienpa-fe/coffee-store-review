import styled from 'styled-components';

const DashboardSidebarstyled = styled.div`
  border-right: 1px solid gray;
  height: 100vh;
  padding: 30px 0 0 10px;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b6b6b;
    border-radius: 5px;
  }

  @media only screen and (max-width: 1366px) {
    padding: 30px 0 0 5px;
    width: 280px;
  }

  @media only screen and (max-width: 1366px) {
    padding: 30px 0 0 5px;
    width: 250px;
  }

  @media only screen and (max-width: 375px) {
    padding: 30px 0 0 5px;
    background: white;
    z-index: 1;
    width: 100px;
  }
`;

export default DashboardSidebarstyled;
