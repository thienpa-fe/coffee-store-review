import styled from 'styled-components';

const FavoriteStoresDataTableStyled = styled.div`
  margin-top: 70px;

  .ant-spin-container > ul > .ant-pagination-item {
    border: none;

    & > a {
      color: black;
    }
  }

  .ant-table-thead > tr > .ant-table-cell {
    text-align: center;
  }

  @media only screen and (max-width: 1366px) {
    margin-top: 20px;
  }

  @media only screen and (max-width: 375px) {
    .ant-spin-container > ul {
      display: inline-block;
      white-space: nowrap;
    }
  }
`;

export default FavoriteStoresDataTableStyled;
