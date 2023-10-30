import React from 'react';
import { Carousel, Image } from 'antd';
import ImageCarouselStyled from './styles';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

const ImageCarousel = () => (
  <ImageCarouselStyled>
    <Carousel
      autoplay
      arrows
      nextArrow={<FaAngleRight />}
      prevArrow={<FaAngleLeft />}
    >
      <Image
        src="https://file.hstatic.net/1000075078/file/grandview2_a48a6f2b6495492180138bfd09d22bb3_master.jpg"
        alt="cf-shop"
        className="cf-shop-img"
      />

      <Image
        src="https://ahamove.com/wp-content/uploads/2021/01/TCH-Hoa%CC%80ng-%C4%90a%CC%A3o-Thuy%CC%81.jpg"
        alt="cf-shop"
        className="cf-shop-img"
      />

      <Image
        src="https://connorgroup.com/static/4bb7a12e56a4061b84e055b97ede6f78/cd40e/coffee-shops-near-our-st-louis-park-apartments.jpg"
        alt="cf-shop"
        className="cf-shop-img"
      />

      <Image
        src="https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg"
        alt="cf-shop"
        className="cf-shop-img"
      />
    </Carousel>
  </ImageCarouselStyled>
);
export default ImageCarousel;
