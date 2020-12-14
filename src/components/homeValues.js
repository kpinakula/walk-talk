import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Container from './container';
import styles from './homeValues.module.scss';

export default function HomeValues() {
  const data = useStaticQuery(graphql`
    query HomeValuesQuery {
      contentfulKeyInfo(id: { eq: "62312a06-afbd-5cd0-a63c-79860813ab76" }) {
        values {
          description {
            raw
          }
          valueImage {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          title
        }
      }
    }
  `);

  const { values } = data.contentfulKeyInfo;

  return (
    <div>
      <Container>
        <h2>Our Values</h2>
      </Container>
      <div className={styles.valuesContainer}>
        {values.map((value, index) => {
          return (
            <div key={index} className={styles.valueContainer}>
              <div className={styles.valueImageContainer}>
                <Img
                  fluid={value.valueImage.fluid}
                  alt={value.valueImage.title}
                  style={{ height: '100%', width: '100%' }}
                  imgStyle={{ objectFit: 'cover' }}
                />
                <h3 className={styles.valueName}>{value.title}</h3>
              </div>
              <div className={styles.valueDescription}>
                {renderRichText(value.description)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
