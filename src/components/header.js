import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './header.module.scss';

export default function Header({ children }) {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(name: { eq: "icon" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
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
      <Link className={styles.siteLogoLink} to="/">
        <Img fluid={data.file.childImageSharp.fluid} alt="Walk and Talk logo" />
      </Link>
      <ul className={styles.navigationLinks}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  );
}
