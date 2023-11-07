import SidebarMainFunctionStyled from './styles';
import PropTypes from 'prop-types';

const SidebarMainFunction = ({ functionIcon, content }) => (
  <SidebarMainFunctionStyled tabIndex={0}>
    <span className="function-icon">{functionIcon}</span>
    <span className="function-name">{content}</span>
  </SidebarMainFunctionStyled>
);

SidebarMainFunction.propTypes = {
  functionIcon: PropTypes.any,
  content: PropTypes.string,
};

export default SidebarMainFunction;
