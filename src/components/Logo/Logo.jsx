import gsLogo from 'assets/images/dcsl-logo.png';
import { LogoContainer, LogoImage, LogoName, StyledSpanLogoName } from 'components/Logo/Logo.styled'
import { useLocation } from 'react-router-dom'

export const Logo = ({ large = false }) => {
  let location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <LogoContainer large={large} >
      <LogoImage src={gsLogo} alt="GuideSmiths logo" />
      <LogoName>
        Keep     <StyledSpanLogoName isHomePage={isHomePage}>DevCalm</StyledSpanLogoName>
      </LogoName>
    </LogoContainer>
  );
};
