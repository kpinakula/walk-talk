import React from 'react';

import Header from './header';
import Footer from './footer';
import Border from './border';
import './layout.scss';

export default function Layout({ children }) {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Border fullWidth />
      <Footer />
    </section>
  );
}
