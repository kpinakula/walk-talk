import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Container from '../components/container';
import Title from '../components/title';

export default function Contact() {
  return (
    <Layout>
      <Container>
        <Link to="/">Home</Link>
        <Title titleText="Contact" />
        <p>Send us a message!</p>
      </Container>
    </Layout>
  );
}
