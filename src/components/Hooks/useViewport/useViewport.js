import { useEffect, useState } from 'react';

import {
  getWindowWidth,
  getWindowHeight,
} from '../../../../tools/lib/windowUtils';

function useViewport() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());

  function handleResize() {
    setWindowWidth(getWindowWidth());
    setWindowHeight(getWindowHeight());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [windowWidth, windowHeight]);

  return { windowWidth, windowHeight };
}

export default useViewport;
