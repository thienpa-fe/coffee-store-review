const { default: styled } = require('styled-components');

const DetailsInformationCoffeeShopStyled = styled.div`
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
    font-weight: 800;
    font-size: 35px;

  }
  .name-shop {
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
  }
  .p-text {
    margin-top: 10px;
  }
  .address{
    margin-top: 10px;
  }
  .price-css {
    margin-top: 10px;
  }
  .open-css {
    margin-top: 10px;
  }
`;
export default DetailsInformationCoffeeShopStyled;
