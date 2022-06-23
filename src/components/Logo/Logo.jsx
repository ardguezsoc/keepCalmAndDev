import gsLogo from 'assets/icons/dcsl-logo.png';
import { LogoContainer, LogoImage, LogoName } from 'components/Logo/Logo.styled';

export const Logo = ({ large = false }) => {
  return (
    <LogoContainer large={large}>
      <LogoImage src={gsLogo} alt="GuideSmiths logo" />
      <LogoName>
        Keep<span>DevCalm</span>
      </LogoName>
    </LogoContainer>
  );
};
