/* istanbul ignore file */
import { css } from 'styled-components';

export const GlobalStylesCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.font.family.text};
    font-size: ${({ theme }) => theme.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    line-height: 1.5;
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.palette.common.background};
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
