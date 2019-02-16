import React from 'react';

// Router
import {BrowserRouter} from 'react-router-dom'

// Layout Components
import AppLayout from 'layouts/AppLayout';

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
