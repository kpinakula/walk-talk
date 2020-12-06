import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Container from '../components/container';
import Title from '../components/title';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title titleText="Home" />
        <Link to="/contact/">Contact</Link>
        <div>Hello world!</div>
      </Container>
    </Layout>
  );
}
