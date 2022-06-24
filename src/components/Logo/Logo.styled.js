import styled from 'styled-components/macro';

export const LogoContainer = styled.div`
  margin-top: 2rem;
  margin-left: 120px;
  --logo-image-width: ${({ large }) => (large ? '60px' : '30px')};
  --logo-name-font-size: ${({ large }) => (large ? '2.5rem' : '1.2rem')};
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: var(--logo-image-width);
  margin-right: 15px;
  background: transparent;
  filter: brightness(0) invert(1);
`;
export const StyledSpanLogoName = styled.span`
  color: ${({ theme,isHomePage }) =>isHomePage ? theme.palette.primary.main: theme.palette.common.sand};
`;

export const LogoName = styled.h2`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: var(--logo-name-font-size);
  font-weight: ${({ theme }) => theme.font.weight.medium};
  
`;
