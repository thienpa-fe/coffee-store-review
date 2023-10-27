import styled from 'styled-components';

const DashboardShareUrlStyled = styled.div`
  padding: 30px 60px 30px 280px;

  .share-url-area {
    display: grid;
    grid-template-columns: 110px 320px 110px;
    row-gap: 50px;
    margin-top: 80px;
    align-items: center;
  }

  .generate-btn-available {
    background: #c7dcfc;
    outline: none;
    padding: 6px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gray;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
      background: #c7dcfca3;
    }
  }

  .generate-btn-disabled {
    background: #dde3eb;
    outline: none;
    padding: 6px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #80808096;

    &:hover {
      cursor: pointer;
    }
  }

  .url-generated {
    width: 300px;
    padding: 10px 8px;
    border: none;
    border: 2px solid gray;
    border-radius: 5px;
  }

  .copy-url-icon {
    font-size: 25px;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s;
    }

    &:active {
      color: rgba(162, 155, 254, 1);
    }
  }

  .generate-success-notification {
    margin-top: 30px;
    display: flex;
    align-items: center;
    column-gap: 5px;

    & > :first-child {
      font-size: 25px;
    }
  }
`;

export default DashboardShareUrlStyled;
