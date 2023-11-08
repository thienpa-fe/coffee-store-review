import { maxWidthContent } from '@/app/styles/variables';
import styled from 'styled-components';

const StoreDetailsContainerStyled = styled.div`
  max-width: ${maxWidthContent};
  margin: 40px auto 0;
  padding: 0 20px;

  .ant-col {
    position: relative;

    .favorite-icon {
      font-size: 40px;
      position: absolute;
      top: 10px;
      right: 40px;
      color: blue;
    }
  }

  .ant-image {
    height: 400px;
    background: yellow;
    overflow: hidden;
    border-radius: 10px;

    .ant-image-img {
      height: 100%;
      object-fit: cover;

      &:hover {
        transform: scale(1.3);
        transition: all 0.3s;
      }
    }
  }
`;

export default StoreDetailsContainerStyled;
