import React from 'react';

import {
  Route,
  Switch,
} from 'react-router';

// Common Components
import Container from 'common/Container';

// Implemented Components
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';

// Styled Components
import AppLayoutWrapper from 'layouts/AppLayoutWrapper';

// Routes
import routes from 'routes'

export default function AppLayout() {
  return (
    <AppLayoutWrapper>
      <NavBar />
      <Container fluid>
        <div className="row">
          <SideBar />
          <Container fluid>
            <div className="content">
              <Switch>
                {routes && routes.map((route) => {
                  return (
                    <Route {...route} />
                  );
                })}

                <Route path="*" render={() => <div>Not Found</div>}/>
              </Switch>
            </div>
          </Container>
        </div>
      </Container>
    </AppLayoutWrapper>
  );
}
