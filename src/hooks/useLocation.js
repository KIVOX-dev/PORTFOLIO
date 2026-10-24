'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const LOCATION_EVENT = 'locationchange';

/**
 * Minimal stand-in for a router `useLocation`: pathname plus the url hash,
 * which Next's router hooks don't expose reactively.
 */
export function useLocation() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    const update = () => {
      setHash(window.location.hash);
      setKey(prev => prev + 1);
    };

    update();
    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update);
    window.addEventListener(LOCATION_EVENT, update);

    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
      window.removeEventListener(LOCATION_EVENT, update);
    };
  }, [pathname]);

  return { pathname, hash, key };
}
