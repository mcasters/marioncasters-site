import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
  const listener = e => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    handler(e);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);

    return function cleanup() {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler, listener]);
}

export default useOnClickOutside;
