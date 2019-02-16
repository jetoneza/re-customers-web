import React from 'react';
import { Link } from 'react-router-dom';

// Common components
import Nav from 'common/Nav';

// Styled components
import NavBarWrapper from 'components/NavBar/NavBarWrapper';

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Nav dark>
        <Link className="navbar-brand" to="/">RE Customers</Link>
      </Nav>
    </NavBarWrapper>
  );
}
