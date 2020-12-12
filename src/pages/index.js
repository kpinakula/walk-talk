import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Container from '../components/container';
import Title from '../components/title';

import homeStyles from '../styles/home.module.scss';

export default function Home({ data }) {
  const heroImage = data.allContentfulKeyInfo.edges[0].node.heroImage.fluid.src;
  const heroImageTitle =
    data.allContentfulKeyInfo.edges[0].node.heroImage.title;
  const { tagline } = data.allContentfulKeyInfo.edges[0].node.tagline;
  const { cta } = data.allContentfulKeyInfo.edges[0].node.cta;

  return (
    <Layout>
      <Container>
        <Title titleText="Home" />
        <div className={homeStyles.hero}>
          <img src={heroImage} alt={heroImageTitle}></img>
          <div>{tagline}</div>
        </div>
        <div>{cta}</div>
        {/* <div>
          {data.allContentfulWaypoint.edges.map(({ node }, index) => (
            <p key={index}>{node.name}</p>
          ))}
        </div> */}
      </Container>
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
              src
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
