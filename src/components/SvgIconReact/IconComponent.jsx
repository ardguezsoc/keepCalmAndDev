
import { iconComponentNames } from 'components/SvgIconReact/IconNames'

export const IconComponent = ({ iconName, ...props }) => {
  const IconComponentTag = iconComponentNames[iconName ?? 'eyes']

  return (
    <IconComponentTag {...props} />
  )
}
