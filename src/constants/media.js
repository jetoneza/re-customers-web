import {css} from 'styled-components';

export const sizes = {
  fourK: 2560,
  laptopL: 1440,
  laptop: 1024,
  tablet: 768,
  mobileL: 425,
  mobileM: 375,
  mobileS: 320
};

export const mediaMin = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${sizes[key]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const mediaMax = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (max-width: ${sizes[key]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default {
  mediaMax,
  mediaMin,
  sizes,
};
