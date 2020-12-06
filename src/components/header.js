import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import styles from './header.module.scss';

export default function Header({ children }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const ListLink = props => (
    <li className={styles.navigationLink}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );

  return (
    <header className={styles.header}>
      <Link className={styles.siteName} to="/">
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      <ul className={styles.navigationLinks}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  );
}
