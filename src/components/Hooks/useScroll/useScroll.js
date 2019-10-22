import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

import { getScrollY } from '../../../../tools/lib/windowUtils';

function useScroll() {
  const [scrollY, setScrollY] = useState(getScrollY());

  function handleChangeScroll() {
    if (typeof window !== 'undefined') {
      const position = window.scrollY || window.pageYOffset;
      setScrollY({ scrollY: position });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleChangeScroll, 200), {
      passive: true,
    });
    return function cleanup() {
      window.removeEventListener('scroll', handleChangeScroll);
    };
  }, []);

  return scrollY;
}

export default useScroll;
