import styled from 'styled-components/macro';
import background from 'assets/images/background.jpg';

export const StyledTipsPage = styled.div`
  border: none;
  padding: 1rem 2rem;
  height: 100vh;
  position: relative;
  background-image: url(${background});
  background-size: 100% 100%;
   width: 100vw;
  .mainTitle {
    font-size: 1.9rem;
    text-align: center;
  }
`;
