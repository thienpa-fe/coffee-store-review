import styled from 'styled-components';

const HomePageSocialNetworkBar = styled.div`
  display: flex;
  align-items: center;

  .login-btn {
    margin-left: 10px;
    padding: 15px 40px;
    border: none;
    outline: none;
    background: #3d3d3d;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 50px;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }

  .social-network-item {
    margin-right: 40px;
    color: #a3a3a3;
    font-size: 25px;

    &:hover {
      color: #2a2a2a;
      cursor: pointer;
      transform: scale(1.3);
      transition: all 0.3s;
    }
  }

  @media (max-width: 1200px) {
    .social-network-item {
      margin-right: 15px;
    }
  }

  @media (max-width: 980px) {
    position: absolute;
    right: 0;
    top: 80px;
  }

  @media (max-width: 625px) {
    top: 60px;

    .login-btn {
      margin-left: 0;
      padding: 10px 30px;
      font-size: 16px;
    }
  }
`;

export default HomePageSocialNetworkBar;
