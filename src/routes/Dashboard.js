import React from 'react';

// Common Components
import Container  from 'common/Container';

// Implemented Components
import SideBar from 'components/SideBar';

export default function Dashboard() {
  return (
    <Container
      fluid
    >
      <div className="dashboard row">
        <SideBar />
        <div style={{marginLeft: 200}}>
          <h1>Dashboard</h1>
        </div>
      </div>
    </Container>
  );
}
