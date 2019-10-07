import React, { useState } from 'react';

import {
  getWindowWidth,
  getWindowHeight,
} from '../../../tools/lib/windowUtils';

function withViewport(WrappedComponent) {
  return function Component(props) {
    const [viewport, setViewport] = useState({
      width: getWindowWidth(),
      height: getWindowHeight(),
    });

    const handleResize = () => {
      setViewport({ width: getWindowWidth(), height: getWindowHeight() });
    };

    React.componentDidMount = () => {
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
    };

    React.componentWillUnmount = () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} viewport={viewport} />;
  };
}

export default withViewport;
