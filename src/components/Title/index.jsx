import TitleStyled from './styles';
import PropTypes from 'prop-types';

const Title = ({ content }) => <TitleStyled>{content}</TitleStyled>;

Title.propTypes = {
  content: PropTypes.string,
};

export default Title;
