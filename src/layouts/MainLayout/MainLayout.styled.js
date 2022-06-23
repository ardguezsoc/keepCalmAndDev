import styled from 'styled-components/macro';

export const Layout = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.palette.common.transparent};
`;

export const LayoutContent = styled.main`
`;
