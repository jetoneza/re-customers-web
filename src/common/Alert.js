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
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid ${ colors.gray };

  ${({ type }) => {
    const style = STYLES[type];

    if (style) {
      const {
        backgroundColor,
        borderColor,
        color
      } = style;

      return (`
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        color: ${color};
      `);
    }
  }}
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
