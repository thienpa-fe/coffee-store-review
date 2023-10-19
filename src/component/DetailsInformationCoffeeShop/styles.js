const { default: styled } = require('styled-components');

const DetailsInformationCoffeeShopStyled = styled.div`
  --primary-margin-top: 10px;

  display: flex;
  justify-content: flex-end;
  padding: 40px 20px;

  .coffee-photo {
    height: 500px;
    border-radius: 10px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;

      &:hover {
        transform: scale(1.3);
        transition: all 0.4s;
      }
    }
  }

  .infomation-shop {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 80px;
  }

  .article-title {
    font-weight: 700;
    font-size: 35px;
  }

  .name-shop {
    margin-top: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .p-text {
    margin-top: var(--primary-margin-top);
  }

  .address {
    margin-top: var(--primary-margin-top);
  }

  .price-css {
    margin-top: var(--primary-margin-top);
  }

  .open-css {
    margin-top: var(--primary-margin-top);
  }
`;
export default DetailsInformationCoffeeShopStyled;
