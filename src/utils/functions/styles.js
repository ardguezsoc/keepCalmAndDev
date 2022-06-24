
export const calcRem = (size) => `${size / 16}rem`
export const getIconSize = (theme, size) => {
  const types = {
    xxSmall: theme.icon.xxSmall,
    xSmall: theme.icon.xSmall,
    small: theme.icon.small,
    medium: theme.icon.medium,
    large: theme.icon.large,
    xLarge: theme.icon.xLarge,
    xxLarge: theme.icon.xxLarge,
    default: theme.icon.medium
  }

  return types[size ?? 'default']
}

export const getColor = (
  theme,
  color,
  colorShade
) => {
  const palette = theme.palette
  if (!color) return undefined
  else if (color === 'primary' || color === 'secondary') return palette[color][colorShade]
  else return  theme.palette.brand.primary.base
}
export const getButtonFontSizeBySize = (
  theme,
  size= 'medium'
) => {
  const fontSizes = {
    small: 'bodyXS',
    medium: 'bodyS',
    large: 'body',
    xLarge: 'bodyL'
  }
  const { font: { size: { desktop } } } = theme

  const variant = fontSizes[size]

  return desktop[variant]
}

export const getButtonPaddingBySize = (
  theme,
  size= 'medium'
) => {
  const spaces = {
    small: [0, 1],
    medium: [0, 2],
    large: [0, 6],
    xLarge: [0, 7]
  }

  const space = spaces[size]

  return theme.spacing(...space)
}

export const getHeightBySize = (theme, size ='medium') => {
  const types = {
    xxSmall: theme.buttonHeight.xxSmall,
    xSmall: theme.buttonHeight.xSmall,
    small: theme.buttonHeight.small,
    medium: theme.buttonHeight.medium,
    large: theme.buttonHeight.large,
    xLarge: theme.buttonHeight.xLarge,
    xxLarge: theme.buttonHeight.xxLarge,
    default: theme.buttonHeight.medium
  }

  return types[size]
}

export const getRadiusByShape = (
  theme,
  shape
) => {
  const { radius: { xs, s, m, xl } } = theme
  const shapes = {
    sharp: 0,
    soft: xs,
    curved: s,
    softCurved: m,
    rounded: xl
  }

  return shapes[shape ?? 'soft']
}
