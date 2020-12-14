import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Container from '../components/container';

export default function About({ data }) {
  return (
    <Layout>
      <Container>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>Some info about us</p>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
