import React from 'react';

import Container from './container';
import Header from './header';

import './layout.scss';

export default function Layout({ children }) {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      {children}
    </div>
  );
}
