import { useEffect, useState } from 'react';

import {
  getWindowWidth,
  getWindowHeight,
} from '../../../../tools/lib/windowUtils';

function useViewport() {
  const [width, setWidth] = useState(getWindowWidth());
  const [height, setHeigth] = useState(getWindowHeight());

  function handleResize() {
    if (typeof window !== 'undefined') {
      setWidth(getWindowWidth());
      setHeigth(getWindowHeight());
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return { width, height };
}

export default useViewport;
