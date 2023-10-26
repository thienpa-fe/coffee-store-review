import HomePageCoffeeShopStyled from './styles';
import Image from 'next/image';
import { BiSolidLike, BiSolidStar } from 'react-icons/bi';
import { Card } from 'antd';
const { Meta } = Card;

const HomePageCoffeeShop = () => (
  <HomePageCoffeeShopStyled>
    <Card
      className="coffee-store-card"
      hoverable
      cover={
        <Image
          alt="example"
          src="https://images.foody.vn/BlogsContents/48367746_1266163096874218_6763262057295904768_n.jpg"
          className="coffee-store-img"
          width={1000}
          height={1000}
        />
      }
    >
      <Meta title="Coffee Store Name" description="Coffee store address" />
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
    </Card>
  </HomePageCoffeeShopStyled>
);

export default HomePageCoffeeShop;
