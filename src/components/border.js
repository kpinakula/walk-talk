import React from 'react';

import styles from './border.module.scss';

export default function Border({ fullWidth }) {
  console.log(fullWidth);
  return (
    <div
      className={
        fullWidth ? `${styles.border} ${styles.fullWidthBorder}` : styles.border
      }
    ></div>
  );
}
