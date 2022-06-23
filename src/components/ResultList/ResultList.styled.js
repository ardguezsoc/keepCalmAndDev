import styled from 'styled-components';
import { media } from 'styles/media.styled';

export const ResultListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.phone} {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-auto-rows: auto;
  grid-gap: 1rem;
  border: none;
  margin-top: 1rem;
  padding: 1rem 0;
  margin-left: -1rem;
  margin-right: -1rem;
`;
