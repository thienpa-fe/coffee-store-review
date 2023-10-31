import styled from 'styled-components';

const MyStoresDataTableStyled = styled.div`
  margin-top: 70px;

  .row-bar {
    display: flex;
    justify-content: space-between;
  }

  Input {
    background-color: #80808080;
    border: 2px solid #808080;
    padding-left: 25px;
  }

  .search {
    position: relative;
  }

  .search-icon {
    position: absolute;
    top: 0;
    left: 0;
    margin: 8px 5px;
  }

  .ant-spin-container > ul > .ant-pagination-item {
    border: none;

    & > a {
      color: black;
    }
  }

  Button {
    border: 2px solid #808080;
  }

  .ant-btn-default {
    &:hover {
      background-color: #14b4c8;
    }
  }

  .ant-btn > span {
    display: inline-block;
    color: black;
  }

  .ant-table-thead > tr > .ant-table-cell {
    text-align: center;
  }

  @media only screen and (max-width: 1366px) {
    margin-top: 10px;
  }

  @media only screen and (max-width: 375px) {
    .ant-spin-container > ul {
      display: inline-block;
      white-space: nowrap;
    }
  }
`;

export default MyStoresDataTableStyled;
