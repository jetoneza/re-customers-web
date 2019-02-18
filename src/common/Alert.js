import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Constants
import colors from 'constants/colors';
import styles from 'constants/styles';

const AlertWrapper = styled.div.attrs({
  className: 'alert-wrapper',
})`
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: 600;
  border: 1px solid ${colors.border};
  color: ${colors.black};
  box-shadow: ${styles.shadow};

  ${({ type }) => {
    const color = colors[type]

    if (color) {
      return (`
        background-color: ${color};
        border-color: transparent;
        color: white;
      `);
    }
  }};
`;

AlertWrapper.displayName = 'AlertWrapper';

function Alert({
  children,
  type,
}) {
  return (
    <AlertWrapper
      type={type}
      role="alert"
    >
      {children}
    </AlertWrapper>
  );
}

Alert.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};

Alert.defaultProps = {
  children: null,
  type: null,
};

export default Alert
