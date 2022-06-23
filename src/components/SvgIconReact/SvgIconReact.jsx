import classnames from 'classnames'

import { StyledSvgIconReact } from 'components/SvgIconReact/SvgIconReact.styled'

export const SvgIconReact = ({
  iconName,
  dataCy = '',
  className,
  fontSize,
  size = 'large',
  fill,
  color,
  onClick,
  colorShade
}) => (
  <StyledSvgIconReact
    className={classnames(className, 'icon')}
    data-cy={dataCy}
    iconName={iconName}
    fontSize={fontSize}
    size={size}
    fill={fill}
    color={color}
    $colorShade={colorShade}
    onClick={onClick}
  />
)
