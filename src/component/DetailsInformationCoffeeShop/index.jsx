import React from 'react';
import DetailsInformationCoffeeShopStyled from './styles';

const DetailsInformationCoffeeShop = () => {
  return (
    <DetailsInformationCoffeeShopStyled>
      <div className="infomation-shop">
        <h1 className="article-title">TITLE COFFEE SHOP </h1>
        <p className='name-shop'>COFFEE SHOP NAME</p>
        <p className='p-text'>Introduction</p>
        <p className='address'>Address:</p>
        <p className='price-css'>Price:</p>
        <p className='open-css'>OPEN: 6h00 - 22h00</p>
      </div>
      <section className="coffee-photo">
        <img
          src="https://culaochamtour.com/wp-content/uploads/2021/11/cac-quan-cafe-dep-o-nam-phuoc-duy-xuyen-c.jpg "
          alt="coffe-shop.png"
        />
      </section>
    </DetailsInformationCoffeeShopStyled>
  );
};

export default DetailsInformationCoffeeShop;
