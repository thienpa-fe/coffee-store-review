import React from 'react';
import DetailsCoffeeShopCardStyled from './styles';

const DetailsCoffeeShopCard = () => {
  return (
    <DetailsCoffeeShopCardStyled>
      <section className="coffee-shop-thumbnail">
        <img
          src="https://culaochamtour.com/wp-content/uploads/2021/11/cac-quan-cafe-dep-o-nam-phuoc-duy-xuyen-c.jpg"
          alt="coffee-shop.png"
        />
      </section>
      <h3 className="coffee-shop-name">COFFEE SHOP 'S NAME</h3>
      <p className="coffee-shop-address">Coffee shop 's address</p>
    </DetailsCoffeeShopCardStyled>
  );
};

export default DetailsCoffeeShopCard;
