import React from 'react';
import HomePageCoffeeShopStyled from './styles';

const HomePageCoffeeShop = () => {
  return (
    <HomePageCoffeeShopStyled>
      <section className="coffee-shop-thumbnail">
        <img
          src="https://images.foody.vn/BlogsContents/48367746_1266163096874218_6763262057295904768_n.jpg"
          alt="coffee-shop.png"
        />
      </section>
      <h3 className="coffee-shop-name">COFFEE SHOP 'S NAME</h3>
      <p className="coffee-shop-address">Coffee shop 's address</p>
    </HomePageCoffeeShopStyled>
  );
};

export default HomePageCoffeeShop;
