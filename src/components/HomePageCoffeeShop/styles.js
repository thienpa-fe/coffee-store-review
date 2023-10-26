import styled from 'styled-components';

const HomePageCoffeeShopStyled = styled.div`
  .ant-card-cover {
    height: 300px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;

    > .coffee-store-img {
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

  .interaction-bar {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--primary-padding);

    .like-btn,
    .favorite-btn {
      font-size: 22px;

      &:hover {
        transform: scale(1.3);
        transition: all 0.2s;
      }
    }

    .like-btn {
      margin-right: 10px;
    }

    .reaction-number {
      margin-left: 15px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 375px) {
    .ant-card-cover {
      height: 220px;
    }
  }
`;

export default HomePageCoffeeShopStyled;
