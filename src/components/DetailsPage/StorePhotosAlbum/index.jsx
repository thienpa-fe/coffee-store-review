import StorePhotosAlbumStyled from '@/components/DetailsPage/StorePhotosAlbum/styles';
import storePhotosDataMock from '@/data/StorePhotosDataMock';
import { Image } from 'antd';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const StorePhotosAlbum = () => (
  <StorePhotosAlbumStyled>
    <Image.PreviewGroup>
      <ResponsiveMasonry columnsCountBreakPoints={{ 376: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {storePhotosDataMock.map((image, index) => (
            <Image src={image} key={index} alt="coffee-store.png" />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Image.PreviewGroup>
  </StorePhotosAlbumStyled>
);

export default StorePhotosAlbum;
