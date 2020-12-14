import React from 'react';

import containerStyles from './container.module.scss';

export default function Container({ children, noBg }) {
  return (
    <div
      className={
        noBg
          ? `${containerStyles.container}  ${containerStyles.containerWhite}`
          : containerStyles.container
      }
    >
      {children}
    </div>
  );
}
