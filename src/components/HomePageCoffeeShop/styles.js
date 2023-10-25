import styled from 'styled-components';

const HomePageCoffeeShopStyled = styled.div`
  --primary-padding: 0 10px;
  --primary-border: 2px solid #80808070;
  --font-size-interaction-btn: 22px;

  border: var(--primary-border);
  border-radius: 10px;
  padding-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .coffee-shop-thumbnail {
    height: 340px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    border-bottom: var(--primary-border);

    & > .coffee-store-img {
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
    font-weight: bold;
    font-size: 18px;
    padding: var(--primary-padding);
  }

  .coffee-shop-address {
    margin-top: 15px;
    color: #a3a3a3;
    padding: var(--primary-padding);
  }

  .interaction-bar {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--primary-padding);

    .like-btn {
      font-size: var(--font-size-interaction-btn);
      margin-right: 5px;
    }

    .favorite-btn {
      font-size: var(--font-size-interaction-btn);
    }

    .reaction-number {
      margin-left: 15px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1024px) {
    .coffee-shop-thumbnail {
      height: 200px;
    }
  }

  @media only screen and (max-width: 375px) {
    .coffee-shop-thumbnail {
      height: 220px;
    }
  }
`;

export default HomePageCoffeeShopStyled;
