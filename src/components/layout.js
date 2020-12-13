import React from 'react';

import Header from './header';
import './layout.scss';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
