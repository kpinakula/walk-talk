import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHero from '../components/homeHero';
import Container from '../components/container';
import HomeTourTypes from '../components/homeTourTypes';
import HomeValues from '../components/homeValues';

export default function Home({ data }) {
  const { cta } = data.allContentfulKeyInfo.edges[0].node.cta;

  return (
    <Layout>
      <HomeHero />
      <Container>
        <h2>{cta}</h2>
      </Container>
      <HomeTourTypes />
      <HomeValues />
    </Layout>
  );
}

export const query = graphql`
  {
    allContentfulKeyInfo {
      edges {
        node {
          cta {
            cta
          }
        }
      }
    }
  }
`;
