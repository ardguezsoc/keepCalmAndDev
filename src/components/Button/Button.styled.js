import styled, {
  css,
} from 'styled-components/macro'
import {
  flexCenter,
  rowItemGap
} from 'styles/mixins'
import {
  getButtonFontSizeBySize,
  getButtonPaddingBySize,
  getColor,
  getHeightBySize,
  getRadiusByShape
} from 'utils/functions/styles'



export const StyledButtonInnerWrapper = styled.div`
  ${flexCenter()}
  ${rowItemGap(1.25)}
`

export const StyledButton = styled.button`
  ${flexCenter()};
  ${rowItemGap(1.25)};
  color: ${({theme}) => theme.palette.common.white};
  border:none;
  cursor: pointer;
  box-shadow: none;
  border-radius:${({ theme, shape }) => getRadiusByShape(theme, shape)};
  pointer-events:${({ isLoading }) => isLoading ? 'none' : 'auto'};
  font-size: ${({ theme, size }) => getButtonFontSizeBySize(theme, size)};
  padding: ${({ theme, size }) => getButtonPaddingBySize(theme, size)};
  width: ${({ theme, size, shape }) => shape === 'rounded'
? getHeightBySize(theme, size)
: 'auto'};
  height: ${({ theme, size }) => getHeightBySize(theme, size)};
  &:hover {
    box-shadow: inset 0px 250px 0px rgba(16, 18, 19, 0.1);
  }

  &:active {
    box-shadow: inset 0px 250px 0px rgba(16, 18, 19, 0.22);
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.m};
    outline: 0;
};

&:disabled {
  cursor:not-allowed;
  &:hover{
    box-shadow: none;
  }
}

  ${({ theme, variant, color }) => variant === 'contained' && css`
  background-color: ${color ? getColor(theme, color) : theme.palette.primary.main};
  &:disabled {
    color:${({ theme }) => theme.palette.common.disabled.base};
    background:${({ theme }) => theme.palette.common.disabled.light};
  }
`}

  ${({ theme, variant, color }) => variant === 'outlined' && css`
    color: ${color
? getColor(theme, color)
: theme.palette.primary.base};
    background:transparent;
    border: 1px solid currentColor;
    &:disabled {
      color:${({ theme }) => theme.palette.common.disabled.base};
      border: 1px solid ${({ theme }) => theme.palette.common.disabled.base};
    }
  `}

  ${({ theme, variant, color }) => variant === 'text' && css`
  color: ${color
? getColor(theme, color)
: theme.palette.primary.base};
  background:transparent;
  &:disabled {
    color:${({ theme }) => theme.palette.semantic.disabled.base};
  }
`}
`
