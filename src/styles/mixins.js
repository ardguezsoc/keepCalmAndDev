import {
  css,
} from 'styled-components/macro'

export const siblingItemGap = (dir, spacing = 1) => css`
    & > :not(:first-child) {
    margin-left: ${({ theme }) => dir === 'row' ? theme.spacing(spacing) : 0};
    margin-top: ${({ theme }) => dir === 'column' ? theme.spacing(spacing) : 0};
  }
`

export const rowItemGap = (spacing = 1) => siblingItemGap('row', spacing)
export const columnItemGap = (spacing = 1) => siblingItemGap('column', spacing)
export const gap = (spacing = 1) => css` gap:${({ theme }) => theme.spacing(spacing)};`

export const flex = (dir = 'row', spacing = 1) => css`
    display:flex;
    flex-direction: ${dir};
   ${gap(spacing)}
`
export const flexCenter = (dir= 'row', spacing = 1) => css`
    ${flex(dir, spacing)}
    justify-content: center;
    align-items: center;  
`
