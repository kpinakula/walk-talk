import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import styles from './homeTourTypes.module.scss';

export default function HomeTourTypes() {
  const data = useStaticQuery(graphql`
    query TourTypesQuery {
      contentfulKeyInfo(id: { eq: "62312a06-afbd-5cd0-a63c-79860813ab76" }) {
        tourType {
          tourTypeTitle
          tourTypeDescription {
            raw
          }
          tourImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
          }
        }
      }
    }
  `);

  const { tourType } = data.contentfulKeyInfo;

  return (
    <div className={styles.toursContainer}>
      {tourType.map((tourType, index) => {
        return (
          <div key={index} className={styles.tourContainer}>
            <Img
              fluid={tourType.tourImage.fluid}
              alt={tourType.tourImage.title}
              className={styles.tourImage}
            />
            <p className={styles.tourType}>{tourType.tourTypeTitle}</p>
            <div className={styles.tourTypeDescription}>
              {renderRichText(tourType.tourTypeDescription)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
