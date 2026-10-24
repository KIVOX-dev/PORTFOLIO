'use client';

import { useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { LOCATION_EVENT } from './useLocation';

export function useScrollToHash() {
  const scrollTimeout = useRef();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split('#')[1];
      const targetElement = document.getElementById(id);

      targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);

        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener('scroll', handleScroll);

          if (window.location.pathname === pathname) {
            onDone?.();
            window.history.pushState(null, '', `${pathname}#${id}`);
            window.dispatchEvent(new Event(LOCATION_EVENT));
          }
        }, 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [reduceMotion, pathname]
  );

  return scrollToHash;
}
