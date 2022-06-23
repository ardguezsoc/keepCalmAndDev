import {
  HeaderContainer,
  HeaderLink,
  HeaderNav,
  HeaderLogo,
  HeaderBrand,
} from 'components/Header/Header.styled';
import {  useState } from 'react';
import { Logo } from 'components/Logo';
import { MAIN_PAGES_ROUTES } from 'constants/routes';

export const Header = () => {
  const [toggled, setToggled] = useState(false);
  const onToggle = () => {
    setToggled(!toggled);
  };
  return (
    <HeaderContainer>
      <HeaderBrand>
        <HeaderLogo>
          <HeaderLink to={MAIN_PAGES_ROUTES.HOME_PAGE}>
            <Logo large={false} />
          </HeaderLink>
        </HeaderLogo>
      </HeaderBrand>
      <HeaderNav onClick={onToggle} toggled={toggled}>
      </HeaderNav>
    </HeaderContainer>
  );
};
