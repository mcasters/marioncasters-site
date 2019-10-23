import { useState, useCallback } from 'react';
import { getClientHeight } from '../../../../tools/lib/windowUtils';

function useHeight() {
  const [height, setHeight] = useState(null);
  const ref = useCallback(pNode => {
    if (pNode !== null) {
      setHeight(getClientHeight(pNode).height);
    }
  }, []);
  return [height, ref];
}

export default useHeight;
