import styled from 'styled-components';

const DetailsCoffeeShopsListStyled = styled.div`
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 15px 0;
    column-gap: 40px;
    row-gap: 60px;
    padding: 30px;
  }

  .zone {
    text-align: center;
  }

  .title {
    margin-top: 30px;
    color: #545454;
    font-weight: 500;
    font-size: 25px;
  }
`;
export default DetailsCoffeeShopsListStyled;
