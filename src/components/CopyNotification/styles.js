import styled from 'styled-components';

const CopyNotificationStyled = styled.div`
  --primary-background-color: rgba(162, 155, 254, 1);

  background: var(--primary-background-color);
  position: absolute;
  padding: 5px 5px;
  border-radius: 5px;
  left: 700px;
  color: white;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: var(--primary-background-color);
    position: absolute;
    left: 17px;
    bottom: -5px;
    transform: rotate(45deg);
  }
`;

export default CopyNotificationStyled;
