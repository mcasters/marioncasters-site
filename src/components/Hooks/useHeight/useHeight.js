import { useState, useCallback } from 'react';
import { getClientHeight } from '../../../../tools/lib/windowUtils';

function useHeight() {
  const [height, setHeight] = useState(100);
  const ref = useCallback(node => {
    setHeight(getClientHeight(node));
  }, []);

  return [height, ref];
}

export default useHeight;
