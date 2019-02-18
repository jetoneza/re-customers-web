import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

// Constants
import colors from 'constants/colors';
import styles from 'constants/styles';

const NavWrapper = styled.div.attrs(({
  fixed,
  light,
}) => ({
  className: cn('nav-wrapper', {
    fixed,
    light,
  }),
}))`
  .navbar {
    background-color: ${colors.primary};
    padding: 20px 60px;
    box-sizing: border-box;
    height: 65px;
    z-index: 1;
    box-shadow: ${styles.shadow};

    .navbar-brand {
      color: white;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      text-decoration: none;
    }
  }

  &.light {
    .navbar {
      background-color: white;

      .navbar-brand {
        color: ${colors.black};
      }
    }
  }

  &.fixed {
    .navbar {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
    }
  }
`;

NavWrapper.displayName = 'NavWrapper';

function Nav({
  children,
  ...props
}) {
  return (
    <NavWrapper {...props}>
      <nav className="navbar">
        { children }
      </nav>
    </NavWrapper>
  );
}

Nav.propTypes = {
  children: PropTypes.any,
  fixed: PropTypes.bool,
  light: PropTypes.bool,
};

Nav.defaultProps = {
  children: null,
  fixed: false,
  light: false,
};

export default Nav;
