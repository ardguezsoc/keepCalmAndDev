import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';


export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  padding: 0 1rem;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.common.transparent};
  color: ${({ theme }) => theme.palette.common.white};
  border-bottom: 1px solid #00c294;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1076px) {
    padding: 0 3rem;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 2rem;
  @media (min-width: 1200px) {
    margin-right: 7rem;
  }
`;
export const HeaderBrand = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1001;
  @media (min-width: 1076px) {
    width: fit-content;
  }
`;
export const HeaderLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};
  text-decoration: none;
  transition: height 0.5s ease-in-out, color 0.5s ease-in-out;

  &.active {
    color: ${({ theme }) => theme.palette.common.greenSuccess};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.common.greenSuccess};
  }
  @media (min-width: 1076px) {
    ${({ $last }) =>
      $last
        ? `
      margin-right: auto;`
        : null}
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  position: absolute;
  gap: 1rem;
  top: 4rem;
  left: 0;
  z-index: 1000;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
  align-items: center;
  transform: ${({ toggled }) =>
    toggled ? 'translate(0px, 0px)' : 'translate(0px, calc(-100% - 4rem))'};
  background-color: ${({ theme }) => theme.palette.common.background};
  transition: transform 0.5s ease;
  @media (min-width: 1076px) {
    flex-direction: row;
    gap: 1.5rem;
    transform: none;
    transition: none;
    position: static;
    background-color: transparent;
  }
  @media (min-width: 1200px) {
    gap: 2rem;
  }
`;
