import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Container from './container';
import Spacing from './spacing';
import styles from './homeTestimonial.module.scss';

export default function HomeTestimonial() {
  const data = useStaticQuery(graphql`
    query HomeTestimonialQuery {
      contentfulKeyInfo(id: { eq: "62312a06-afbd-5cd0-a63c-79860813ab76" }) {
        testimonialHomepage {
          testimonialAuthor
          testimonialQuote {
            raw
          }
        }
      }
    }
  `);

  const { testimonialAuthor } = data.contentfulKeyInfo.testimonialHomepage;
  const { testimonialQuote } = data.contentfulKeyInfo.testimonialHomepage;

  return (
    <Container noBg>
      <div className={styles.container}>
        <div className={styles.quote}>{renderRichText(testimonialQuote)}</div>
        <p className={styles.author}>{testimonialAuthor}</p>
      </div>
      <Spacing />
    </Container>
  );
}
