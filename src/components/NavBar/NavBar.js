import React from 'react';
import { Link } from 'react-router-dom';

// Common components
import Nav from 'common/Nav';

// Styled components
import NavBarWrapper from 'components/NavBar/NavBarWrapper';

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Nav fixed light>
        <Link className="navbar-brand" to="/">RE Custom.</Link>
      </Nav>
    </NavBarWrapper>
  );
}
