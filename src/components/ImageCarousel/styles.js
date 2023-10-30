import styled from 'styled-components';

const ImageCarouselStyled = styled.div`
  --height-width-carousel-child: 100%;
  --position-slicks: 20px;

  margin-top: 30px;

  .ant-carousel {
    height: 400px;
    border-radius: 10px;
    overflow: hidden;

    .slick-slider {
      height: var(--height-width-carousel-child);

      & > .slick-dots > li {
        width: 12px;
        height: 12px;

        & > button {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .slick-list {
        height: var(--height-width-carousel-child);

        .slick-track {
          height: var(--height-width-carousel-child);

          .slick-active {
            & > div {
              height: var(--height-width-carousel-child);

              & > .ant-image {
                width: var(--height-width-carousel-child);
                height: var(--height-width-carousel-child);

                & > .ant-image-img {
                  width: var(--height-width-carousel-child);
                  height: var(--height-width-carousel-child);
                  object-fit: cover;
                  object-position: center;
                  border-radius: 10px;
                }
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
