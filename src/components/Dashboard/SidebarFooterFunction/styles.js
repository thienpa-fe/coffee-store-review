import styled from 'styled-components';

const SidebarFooterFunctionStyled = styled.div`
  --primary-color: #c7dcfc;

  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 5px 10px;

  .function-icon {
    font-size: 40px;
    margin-right: 10px;
    display: flex;
  }

  .function-name {
    font-size: 20px;
    font-weight: bold;
  }

  &:hover,
  &:focus {
    background: var(--primary-color);
    border-radius: 5px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1366px) {
    margin-top: 5px;

    .function-icon {
      font-size: 30px;
    }

    .function-name {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 375px) {
    .function-name {
      display: none;
    }

    .function-icon {
      margin-right: 0px;
    }
  }
`;

export default SidebarFooterFunctionStyled;
