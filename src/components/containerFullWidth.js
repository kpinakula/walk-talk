import React from 'react';

import containerStyles from './containerFullWidth.module.scss';

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>;
}
