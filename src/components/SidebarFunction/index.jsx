import SidebarFunctionStyled from './styles';
import PropTypes from 'prop-types';

const SidebarFunction = ({ functionIcon, content }) => (
  <SidebarFunctionStyled tabIndex={0}>
    <span className="function-icon">{functionIcon}</span>
    <span className="function-name">{content}</span>
  </SidebarFunctionStyled>
);

SidebarFunction.propTypes = {
  functionIcon: PropTypes.any,
  content: PropTypes.string,
};

export default SidebarFunction;
