import styled from 'styled-components';
import { media } from 'styles/media.styled';

export const ResultListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.common.white};
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.phone} {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-auto-rows: auto;
  grid-gap: 1rem;
  border: none;
  padding: 1rem 0;
`;
