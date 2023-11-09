import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export function useMobile() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 768);

  useEffect(() => {
      const newIsMobile = width < 768;
      setIsMobile(newIsMobile);
  }, [width]);

  return isMobile;
}



