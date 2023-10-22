import styled from 'styled-components';

const DetailsCoffeeShopCardStyled = styled.div`
  .coffee-shop-thumbnail {
    height: 400px;
    border-radius: 10px;
    overflow: hidden;

    .coffee-shop-img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;

      &:hover {
        transform: scale(1.3);
        transition: all 0.4s;
      }
    }
  }

  .coffee-shop-name {
    margin-top: 30px;
    color: #545454;
    font-weight: 500;
    font-size: 18px;
  }

  .coffee-shop-address {
    margin-top: 15px;
    color: #a3a3a3;
  }
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    transition: all 0.4s;
  }
`;
export default DetailsCoffeeShopCardStyled;
