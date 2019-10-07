import React, { useState } from 'react';

import { getScroll } from '../../../tools/lib/windowUtils';

function withScrolling(ComposedComponent) {
  return function Component(props) {
    const calculatedScroll = getScroll();
    const [scroll, setScroll] = useState(calculatedScroll);

    const updateScrolling = () => {
      const wScroll = window.pageYOffset;
      if (wScroll !== scroll) {
        setScroll({ wScroll });
      }
    };

    React.componentDidMount = () => {
      window.addEventListener('scroll', updateScrolling);
    };

    React.componentWillUnmount = () => {
      window.removeEventListener('scroll', updateScrolling);
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ComposedComponent {...props} scroll={scroll} />;
  };
}

export default withScrolling;
