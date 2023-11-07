import styled from 'styled-components';

const ImageCarouselStyled = styled.div`
  --height-width-carousel-child: 100%;
  --position-slicks: 20px;

  margin-top: 30px;

  .ant-carousel {
    .slick-slider {
      & > .slick-dots > li {
        width: 12px;
        height: 12px;

        & > button {
          width: var(--height-width-carousel-child);
          height: var(--height-width-carousel-child);
          border-radius: 50%;
        }
      }
    }

    .slick-list {
      border-radius: 10px;

      .slick-track {
        height: 400px;

        .slick-active {
          & > div {
            height: var(--height-width-carousel-child);

            & > .ant-image {
              width: var(--height-width-carousel-child);
              height: var(--height-width-carousel-child);

              & > .ant-image-img {
                height: var(--height-width-carousel-child);
                object-fit: cover;
                object-position: center;
              }
            }
          }
        }
      }
    }
  }

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next {
    color: white;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 1;
    top: 180px;
  }

  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover,
  .ant-carousel .slick-prev:focus,
  .ant-carousel .slick-next:focus {
    transform: scale(1.3);
    color: white;
    transition: all 0.2s;
  }

  .ant-carousel .slick-prev {
    left: var(--position-slicks);
  }

  .ant-carousel .slick-next {
    right: var(--position-slicks);
  }
`;

export default ImageCarouselStyled;
