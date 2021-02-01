import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/logo.svg';
import styles from './header.module.scss';

export default function Header() {
  const ListLink = props => (
    <li className={styles.navigationLink}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );

  return (
    <header className={styles.header}>
      <Link className={styles.siteLogoContainer} to="/">
        <img className={styles.siteLogo} src={Logo} alt="Walk and Talk logo" />
      </Link>
      <nav className={styles.navigationLinks}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </nav>
    </header>
  );
}
