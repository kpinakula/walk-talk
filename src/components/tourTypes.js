import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from './container';
import styles from './tourTypes.module.scss';

export default function Header() {
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
          }
        }
      }
    }
  `);

  const TourTypes = data.contentfulKeyInfo.tourType;
  // console.log(tourType.tourTypeDescription.raw);
  return (
    <div className={styles.toursContainer}>
      {TourTypes.map((tourType, index) => {
        return (
          <div key={index} className={styles.tourContainer}>
            <Img
              fluid={tourType.tourImage.fluid}
              alt={tourType.tourImage.title}
              className={styles.tourImage}
            />
            <p className={styles.tourType}>{tourType.tourTypeTitle}</p>
            {/* <p className={styles.tourTypeDescription}>
              {tourType.tourTypeDescription.raw}
            </p> */}
          </div>
        );
      })}
    </div>
  );
}
