import styled from 'styled-components';

const DashboardSidebarStyled = styled.div`
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

  &::-webkit-scrollbar-thumb {
    background-color: rgba(43, 203, 186, 1);
    border-radius: 5px;
  }

  @media only screen and (max-width: 375px) {
    padding: 30px 0 0 5px;
  }
`;

export default DashboardSidebarStyled;
