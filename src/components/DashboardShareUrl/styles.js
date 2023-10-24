import styled from 'styled-components';

const DashboardShareUrlStyled = styled.div`
  padding: 30px 60px 30px 280px;

  .share-url-area {
    display: grid;
    grid-template-columns: 110px 320px 110px;
    row-gap: 50px;
    margin-top: 80px;
    align-items: center;

    @media (max-width: 850px) {
      grid-template-columns: 100px 210px 80px;
    }
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

    @media (max-width: 850px) {
      padding: 6px 0;
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

    @media (max-width: 850px) {
      padding: 6px 0;
    }
  }

  .url-generated {
    width: 280px;
    padding: 10px 8px;
    border: none;
    border: 2px solid gray;
    border-radius: 5px;

    @media (max-width: 850px) {
      width: 180px;
    }
  }

  .copy-url-icon {
    font-size: 25px;

    &:hover {
      cursor: pointer;
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

  @media (max-width: 800px) {
    padding: 30px 20px 30px 100px;
  }
`;

export default DashboardShareUrlStyled;
