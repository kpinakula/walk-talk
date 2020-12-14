import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './homeHero.module.scss';

export default function HomeHero() {
  const data = useStaticQuery(graphql`
    query HomeHeroQuery {
      contentfulKeyInfo(id: { eq: "62312a06-afbd-5cd0-a63c-79860813ab76" }) {
        heroImage {
          fluid {
            ...GatsbyContentfulFluid
          }
          title
        }
        tagline {
          tagline
        }
      }
    }
  `);

  const heroImage = data.contentfulKeyInfo.heroImage.fluid;
  const heroImageTitle = data.contentfulKeyInfo.heroImage.title;
  const { tagline } = data.contentfulKeyInfo.tagline;

  return (
    <div className={styles.hero}>
      <Img
        fluid={heroImage}
        alt={heroImageTitle}
        style={{ height: '100%', width: '100%' }}
        imgStyle={{ objectFit: 'cover' }}
      />
      <h1 className={styles.tagline}>{tagline}</h1>
    </div>
  );
}
