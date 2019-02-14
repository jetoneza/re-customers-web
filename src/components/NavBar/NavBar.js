import React from 'react';

import Nav from 'common/Nav';

import NavBarWrapper from 'components/NavBar/NavBarWrapper';

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Nav dark shadow>
        <a className="navbar-brand" href="#">RE Customers</a>
      </Nav>
    </NavBarWrapper>
  );
}
