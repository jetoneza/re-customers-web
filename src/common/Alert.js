import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from 'constants/colors';

const STYLES = {
  primary: {
    backgroundColor: colors.primaryBackground,
    borderColor: colors.primaryBorder,
    color: colors.primaryFont,
  },
  secondary: {
    backgroundColor: colors.secondaryBackground,
    borderColor: colors.secondaryBorder,
    color: colors.secondaryFont,
  },
  success: {
    backgroundColor: colors.successBackground,
    borderColor: colors.successBorder,
    color: colors.successFont,
  },
  danger: {
    backgroundColor: colors.dangerBackground,
    borderColor: colors.dangerBorder,
    color: colors.dangerFont,
  },
  warning: {
    backgroundColor: colors.warningBackground,
    borderColor: colors.warningBorder,
    color: colors.warningFont,
  },
  info: {
    backgroundColor: colors.infoBackground,
    borderColor: colors.infoBorder,
    color: colors.infoFont,
  },
};

const AlertWrapper = styled.div.attrs({
  className: 'alert-wrapper',
})`
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: 600;
  border: 1px solid ${colors.gray};
  color: ${colors.black};

  ${({ type }) => {
    const color = colors[type]

    if (color) {
      return (`
        background-color: ${color};
        border-color: transparent;
        color: white;
      `)
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
