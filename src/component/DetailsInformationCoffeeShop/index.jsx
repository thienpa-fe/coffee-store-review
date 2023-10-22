import Image from 'next/image';
import DetailsInformationCoffeeShopStyled from './styles';

const DetailsInformationCoffeeShop = () => (
  <DetailsInformationCoffeeShopStyled>
    <div className="infomation-shop">
      <h1 className="article-title">TITLE COFFEE SHOP </h1>
      <p className="name-shop">COFFEE SHOP NAME</p>
      <p className="p-text">Introduction</p>
      <p className="address">Address:</p>
      <p className="price-css">Price:</p>
      <p className="open-css">OPEN: 6h00 - 22h00</p>
    </div>
    <section className="coffee-photo">
      <Image
        src="https://neohouse.vn/wp-content/uploads/2019/07/thiet-ke-quan-cafe-anh-bia.jpg "
        alt="coffe-shop.png"
        width={1000}
        height={1000}
      />
    </section>
  </DetailsInformationCoffeeShopStyled>
);

export default DetailsInformationCoffeeShop;
