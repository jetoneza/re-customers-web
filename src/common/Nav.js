import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Constants
import colors from 'constants/colors';

const NavWrapper = styled.div.attrs({
  className: 'nav-wrapper',
})`
  .navbar {
    background-color: ${colors.primary};
    padding: 20px;
    box-sizing: border-box;
    height: 60px;

    .navbar-brand {
      color: white;
      font-size: 18px;
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
    }

    ${({ fixed }) => fixed ? (`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
    `) : ''}
  }
`;

NavWrapper.displayName = 'NavWrapper';

function Nav({
  children,
  fixed,
}) {
  return (
    <NavWrapper fixed={fixed}>
      <nav className="navbar">
        { children }
      </nav>
    </NavWrapper>
  );
}

Nav.propTypes = {
  children: PropTypes.any,
};

Nav.defaultProps = {
  children: null,
};

export default Nav;
