import { css } from 'styled-components';

import InterMediumWoff from 'assets/fonts/Montserrat-Regular.woff';
import InterMediumWoff2 from 'assets/fonts/Montserrat-Regular.woff2';

export const GlobalFonts = css`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${InterMediumWoff}) format('woff2'),
      url(${InterMediumWoff2}) format('woff');
  }
`;
