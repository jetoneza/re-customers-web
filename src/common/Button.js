import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

// Constants
import colors from 'constants/colors';
import styles from 'constants/styles';

function getStyle(style) {
  const color = colors[style];

  const background = color || 'white';
  const fontColor = color ? 'white' : colors.black;

  return (`
    background-color: ${background};
    border-color: transparent;
    color: ${fontColor};
    filter: brightness(110%);

    &:focus,
    &:hover {
      background-color: ${background};
      border-color: transparent;
      color: ${fontColor};
      filter: brightness(100%);
    }
  `);
}

const ButtonWrapper = styled.div.attrs(({
  color,
  disabled,
}) => ({
  className: cn('button-wrapper', {
    [color]: true,
    disabled,
  })
}))`
  display: inline-block;

  button {
    ${({ color }) => {
      return (`
        ${color ? `box-shadow: ${styles.shadow};` : ''}
        ${getStyle(color)}
      `)
    }}
  }

  &.disabled {
    button {
      cursor: not-allowed;
      color: ${colors.grayDarkest};
      background-color: ${colors.white};
      filter: brightness(100%);
      border: 1px solid ${colors.grayDarkest};
      border-style: dashed;
      box-shadow: none;
    }
  }
`;

ButtonWrapper.displayName = 'ButtonWrapper';

function Button({
  children,
  disabled,
  onClick,
  color,
  type,
}) {
  return (
    <ButtonWrapper
      color={color}
      disabled={disabled}>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className="button">
        { children }
      </button>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  onClick: () => {},
  type: 'button',
  style: 'default',
};

export default Button;
