import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /********************
   * ReactModal Styles
   ********************/

  .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.6) !important;
    z-index: 2;

    .ReactModal__Content {
      &:focus {
        outline: none !important;
      }
    }
  }
`;

export default GlobalStyle;
