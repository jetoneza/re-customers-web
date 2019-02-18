import React from 'react';

// Route Helper
import renderSuspense from 'routes/renderSuspense';

// Lazy loaded components
const Customers = React.lazy(() => import('routes/Customers'));
const CustomerAccount = React.lazy(() => import('routes/CustomerAccount'));
const Dashboard = React.lazy(() => import('routes/Dashboard'));
const Home = React.lazy(() => import('routes/Home'));

const routes = [
  {
    key: 'home',
    exact: true,
    path: '/',
    render: renderSuspense(Home)
  },
  {
    key: 'dashboard',
    exact: true,
    path: '/dashboard',
    render: renderSuspense(Dashboard)
  },

  // Customer Routes
  {
    key: 'customers',
    path: '/customers',
    render: renderSuspense(Customers)
  },
  {
    key: 'customer',
    path: '/customer/:id',
    render: renderSuspense(CustomerAccount)
  }
];

export default routes;
