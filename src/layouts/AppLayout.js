import React from 'react';

// Implemented Components
import NavBar from 'components/NavBar';

// Route Components
import Dashboard from 'routes/Dashboard';

export default function AppLayout() {
  return (
    <React.Fragment>
      <NavBar />
      <Dashboard />
    </React.Fragment>
  );
}
