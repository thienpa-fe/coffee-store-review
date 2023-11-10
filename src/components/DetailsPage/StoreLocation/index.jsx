import StoreLocationStyled from '@/components/DetailsPage/StoreLocation/styles';

const StoreLocation = () => (
  <StoreLocationStyled>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30672.80795460815!2d108.18470802712105!3d16.060248122340006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ca4b5e92e1%3A0xa0655a26d94a09cc!2sHighlands%20Coffee!5e0!3m2!1svi!2s!4v1699434633918!5m2!1svi!2s"
      width="600"
      height="450"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      className="google-map"
    ></iframe>
  </StoreLocationStyled>
);

export default StoreLocation;
