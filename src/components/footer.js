import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './footer.module.scss';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query Logo2Query {
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
    <footer className={styles.footer}>
      <Link className={styles.siteLogoLink} to="/">
        <Img fluid={data.file.childImageSharp.fluid} alt="Walk and Talk logo" />
      </Link>
      <nav className={`${styles.footerNavigation} ${styles.footerNavigation1}`}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About us</ListLink>
        <ListLink to="/">What's on</ListLink>
        <ListLink to="/">Support our work</ListLink>
        <ListLink to="/">Resources</ListLink>
      </nav>
      <nav className={`${styles.footerNavigation} ${styles.footerNavigation2}`}>
        <ListLink to="/">Blog</ListLink>
        <ListLink to="/">FAQs</ListLink>
        <ListLink to="/">Ticket T&Cs</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/">Privacy</ListLink>
      </nav>
    </footer>
  );
}
