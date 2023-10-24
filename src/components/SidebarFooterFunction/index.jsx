import SidebarFooterFunctionStyled from './styles';
import PropTypes from 'prop-types';

const SidebarFooterFunction = ({ functionIcon, content }) => (
  <SidebarFooterFunctionStyled tabIndex={0}>
    <span className="function-icon">{functionIcon}</span>
    <span className="function-name">{content}</span>
  </SidebarFooterFunctionStyled>
);

SidebarFooterFunction.propTypes = {
  functionIcon: PropTypes.any,
  content: PropTypes.string,
};

export default SidebarFooterFunction;
