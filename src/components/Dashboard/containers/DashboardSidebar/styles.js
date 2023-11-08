import styled from 'styled-components';

const DashboardSidebarstyled = styled.div`
  border-right: 1px solid gray;
  height: 100vh;
  padding: 30px 0 0 10px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  @media only screen and (max-width: 375px) {
    padding: 30px 0 0 5px;
    background: white;
    z-index: 1;
    width: 100px;
  }
`;

export default DashboardSidebarstyled;
