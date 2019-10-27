import { useEffect, useState } from 'react';

function useSsrDone() {
  const [ssrDone, setSsrDone] = useState(false);

  useEffect(() => {
    setSsrDone(navigator.onLine);
  }, []);

  return ssrDone;
}

export default useSsrDone;
