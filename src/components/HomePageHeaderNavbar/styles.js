import styled from 'styled-components';

export const HomePageHeaderNavbarStyled = styled.div`
  display: flex;
  align-items: center;

  .navbar-list {
    display: flex;
    margin-left: 50px;
    column-gap: 50px;

    & .navbar-item {
      text-decoration: none;
      font-weight: bold;
      color: #595959;
      position: relative;
      font-size: 20px;

      &:hover {
        cursor: pointer;
        color: #2a2a2a;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -7px;
        height: 4px;
        width: 0;
        background-color: #2a2a2a;
        border-radius: 50px;
        transition: width 0.3s ease;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 1200px) {
    .navbar-list {
      margin-left: 20px;
      column-gap: 20px;
    }
  }

  @media (max-width: 625px) {
    .navbar-list {
      margin-left: 10px;
      column-gap: 10px;

      & > .navbar-item {
        font-size: 16px;
      }
    }
  }
`;

export const LogoStyled = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 625px) {
    width: 50px;
    height: 50px;
  }
`;
