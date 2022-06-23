import styled from 'styled-components/macro'
import {
  getIconSize,
  getColor
} from 'utils/functions/styles'

import { IconComponent } from 'components/SvgIconReact/IconComponent'

export const StyledSvgIconReact = styled(IconComponent)`
  height: 1em;
  width: 1em;
  color:${({ theme, color, fill, $colorShade }) => fill ?? getColor(theme, color, $colorShade)};
  fill:none;
  font-size: ${({ theme, fontSize, size }) => fontSize ?? getIconSize(theme, size)};
`
