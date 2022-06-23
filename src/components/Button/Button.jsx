import { StyledButton } from 'components/Button/Button.styled'
import { SvgIconReact } from 'components/SvgIconReact'

export const Button = ({
  children,
  isLoading = false,
  size = 'medium',
  variant = 'contained',
  shape = 'curved',
  dataCy,
  disabled,
  buttonIconName,
  component,
  type = 'button',
  ...otherProps
}) => {
  const handleOnClick = (e) => {
    // e.stopPropagation()
    otherProps?.onClick?.(e)
  }

  return (
      <StyledButton
        {...otherProps}
        as={component}
        isLoading={isLoading}
        size={size}
        variant={variant}
        shape={shape}
        data-cy={dataCy}
        disabled={disabled}
        buttonIconName={buttonIconName}
        type={type}
        onClick={handleOnClick}
      >

        {buttonIconName && !isLoading && (
          <SvgIconReact size={size === 'large' ? 'medium' : size} iconName={buttonIconName} />
        )}
        <div>
          {children}
        </div>
      </StyledButton>
  )
}
