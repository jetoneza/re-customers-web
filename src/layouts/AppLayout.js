import React from 'react';

// Common Components
import Container from 'common/Container';

// Implemented Components
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';

// Route Components
import Dashboard from 'routes/Dashboard';

// Styled Components
import AppLayoutWrapper from 'layouts/AppLayoutWrapper';

export default function AppLayout() {
  return (
    <AppLayoutWrapper>
      <NavBar />
      <Container fluid>
        <div className="row">
          <SideBar />
          <Container fluid>
            <div className="content">
              <Dashboard />
            </div>
          </Container>
        </div>
      </Container>
    </AppLayoutWrapper>
  );
}
