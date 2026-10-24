'use client';

import { VisuallyHidden } from '@/components/visually-hidden';
import styles from '@/app/root.module.css';

export const SkipLink = () => (
  <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
    Skip to main content
  </VisuallyHidden>
);
