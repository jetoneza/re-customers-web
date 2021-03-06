import React from 'react';

import {
  Route,
  Switch,
} from 'react-router';

// Implemented Components
import NavBar from 'components/NavBar';
import NotFound from 'components/NotFound';
import SideBar from 'components/SideBar';

// Styled Components
import AppLayoutWrapper from 'layouts/AppLayoutWrapper';

// Routes
import routes from 'routes'

export default function AppLayout() {
  return (
    <AppLayoutWrapper>
      <NavBar />
      <SideBar />
      <div className="content">
        <Switch>
          {routes && routes.map((route) => {
            return (
              <Route {...route} />
            );
          })}

          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </AppLayoutWrapper>
  );
}
