import styled from 'styled-components/macro'
import {
  getIconSize,
  getColor
} from 'utils/functions/styles'

import { IconComponent } from 'components/SvgIconReact/IconComponent'

export const StyledSvgIconReact = styled(IconComponent)`
  height: 1em;
  width: 1em;
  cursor: pointer;
  color:${({ theme, color, fill, $colorShade }) => fill ?? getColor(theme, color, $colorShade)};
  filter: invert(67%) sepia(9%) saturate(676%) hue-rotate(129deg) brightness(92%) contrast(93%);
  font-size: ${({ theme, fontSize, size }) => fontSize ?? getIconSize(theme, size)};
  position: fixed; 
  bottom: 10px;
  right: 50px;
`
