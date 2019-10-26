import { useState, useCallback } from 'react';
import { getClientHeight } from '../../../../tools/lib/windowUtils';

function useHeight() {
  const [height, setHeight] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setHeight(getClientHeight(node));
    }
  }, []);

  return [height, ref];
}

export default useHeight;
