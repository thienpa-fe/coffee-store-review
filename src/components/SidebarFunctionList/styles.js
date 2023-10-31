import styled from 'styled-components';

const SidebarFunctionsListStyled = styled.div`
  margin-top: 40px;
  flex-grow: 2;
  padding: 20px 0;

  .jwSyBi {
    &:hover {
      background-color: #14b4c8;
    }
  }

  .nav {
    color: black;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 20px;
    padding: 10px 0;
  }

  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default SidebarFunctionsListStyled;
