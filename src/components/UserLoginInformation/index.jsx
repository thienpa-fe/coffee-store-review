import UserLoginInformationStyled from './styles';
import PropTypes from 'prop-types';

const UserLoginInformation = ({
  session: {
    data: {
      user: { name },
    },
  },
}) => (
  <UserLoginInformationStyled>
    Signed in as <span className="user-info-login">{name}</span>
  </UserLoginInformationStyled>
);

UserLoginInformation.propTypes = {
  session: PropTypes.object,
  data: PropTypes.object,
  user: PropTypes.object,
  name: PropTypes.string,
};

export default UserLoginInformation;
