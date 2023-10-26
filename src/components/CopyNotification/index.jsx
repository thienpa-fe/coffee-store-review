import React from 'react';
import CopyNotificationStyled from './styles';
import PropTypes from 'prop-types';

const CopyNotification = ({ content }) => (
  <CopyNotificationStyled>{content}</CopyNotificationStyled>
);

CopyNotification.propTypes = {
  content: PropTypes.string,
};

export default CopyNotification;
