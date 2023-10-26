import HomePageCoffeeShopStyled from './styles';
import Image from 'next/image';
import { BiSolidLike, BiSolidStar } from 'react-icons/bi';

const HomePageCoffeeShop = () => (
  <HomePageCoffeeShopStyled>
    <section className="coffee-shop-thumbnail">
      <Image
        src="https://images.foody.vn/BlogsContents/48367746_1266163096874218_6763262057295904768_n.jpg"
        alt="coffee-shop.png"
        className="coffee-store-img"
        height={1000}
        width={1000}
      />
    </section>
    <h3 className="coffee-shop-name">COFFEE SHOP&lsquo;S NAME</h3>
    <p className="coffee-shop-address">Coffee shop&lsquo;s address</p>
    <div className="interaction-bar">
      <div className="actions-bar">
        <BiSolidLike className="like-btn" />
        <BiSolidStar className="favorite-btn" />
      </div>
      <div className="interaction-statistics">
        <span className="review-number">1,930 reviews</span>
        <span className="reaction-number">25k reactions</span>
      </div>
    </div>
  </HomePageCoffeeShopStyled>
);

export default HomePageCoffeeShop;
