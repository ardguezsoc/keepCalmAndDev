import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { GlobalFonts } from 'styles/Fonts.styled'
import { GlobalStylesCss } from 'styles/Global.styled'

export const GlobalAppStyles = createGlobalStyle`
  ${normalize}
  ${GlobalFonts}
  ${GlobalStylesCss}
`;
