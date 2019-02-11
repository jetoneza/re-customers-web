import React from 'react';

import Container from './common/Container'

export default function App() {
  return (
    <Container
      fluid
      style={{
        padding: 24,
        textAlign: 'center'
      }}
    >
      <h1>
        RE Customers
      </h1>
      <button className="btn btn-lg btn-success">Success Button</button>
    </Container>
  );
}
