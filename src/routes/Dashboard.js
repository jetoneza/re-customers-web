import React from 'react';

// Common Components
import Container  from '../common/Container';

export default function Dashboard() {
  return (
    <Container
      fluid
      style={{
        padding: 20,
        textAlign: 'center'
      }}
    >
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
    </Container>
  );
}
