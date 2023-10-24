import styled from 'styled-components';

const SidebarFunctionStyled = styled.div`
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

    @media (max-width: 800px) {
      display: none;
    }
  }

  &:hover,
  &:focus {
    background: var(--primary-color);
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default SidebarFunctionStyled;
