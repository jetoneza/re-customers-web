import React from 'react';

// Router
import {BrowserRouter} from 'react-router-dom'

// Layout Components
import AppLayout from 'layouts/AppLayout';

// Styled Components
import GlobalStyle from 'common/GlobalStyle';

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </React.Fragment>
  );
}
