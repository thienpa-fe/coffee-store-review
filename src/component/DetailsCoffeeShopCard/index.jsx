import Image from 'next/image';
import DetailsCoffeeShopCardStyled from './styles';

const DetailsCoffeeShopCard = () => (
  <DetailsCoffeeShopCardStyled>
    <section className="coffee-shop-thumbnail">
      <Image
        src="https://neohouse.vn/wp-content/uploads/2019/07/thiet-ke-quan-cafe-anh-bia.jpg "
        alt="coffee-shop.png"
        width={1000}
        height={1000}
      />
    </section>
    <h3 className="coffee-shop-name">COFFEE SHOPS NAME</h3>
    <p className="coffee-shop-address">Coffee shops address</p>
  </DetailsCoffeeShopCardStyled>
);

export default DetailsCoffeeShopCard;
