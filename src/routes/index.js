import React from 'react';

// Route Helper
import renderSuspense from 'routes/renderSuspense';

// Lazy loaded components
const Dashboard = React.lazy(() => import('routes/Dashboard'));

const routes = [
  {
    key: 'dashboard',
    exact: true,
    path: '/',
    render: renderSuspense(Dashboard)
  }
];

export default routes;
