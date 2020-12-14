import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Container from '../components/container';
import TourTypes from '../components/tourTypes';

import homeStyles from '../styles/home.module.scss';

export default function Home({ data }) {
  const heroImage = data.allContentfulKeyInfo.edges[0].node.heroImage.fluid;
  const heroImageTitle =
    data.allContentfulKeyInfo.edges[0].node.heroImage.title;
  const { tagline } = data.allContentfulKeyInfo.edges[0].node.tagline;
  const { cta } = data.allContentfulKeyInfo.edges[0].node.cta;

  return (
    <Layout>
      <div className={homeStyles.hero}>
        <Img
          fluid={heroImage}
          alt={heroImageTitle}
          style={{ height: '100%', width: '100%' }}
          imgStyle={{ objectFit: 'cover' }}
        />
        <h1 className={homeStyles.tagline}>{tagline}</h1>
      </div>
      <Container>
        <h2>{cta}</h2>
      </Container>
      <TourTypes />
    </Layout>
  );
}

export const query = graphql`
  {
    allContentfulKeyInfo {
      edges {
        node {
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
          }
          tagline {
            tagline
          }
          cta {
            cta
          }
        }
      }
    }
  }
`;
