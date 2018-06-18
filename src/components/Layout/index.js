import PropTypes from 'prop-types';
import React from 'react';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveLayout = ({ children }) => {
  return (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  );
};

ResponsiveLayout.propTypes = {
  children: PropTypes.node
};

export default ResponsiveLayout;
