import styled from 'styled-components';

const UserLoginInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .user-avatar {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-info {
    line-height: 30px;

    & .user-name {
      font-weight: bold;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export default UserLoginInfoStyled;
