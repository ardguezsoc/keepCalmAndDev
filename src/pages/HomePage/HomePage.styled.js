import styled from 'styled-components/macro';
import background from 'assets/images/background.jpg';

export const StyledHomePage = styled.div`
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

export const MainButtonsContainer = styled.div`
  width: 400px;
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr;
  gap:1rem
`
export const StyledTitle = styled.div`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.font.size.normal};
  border: 2px solid ${({ theme }) => theme.palette.common.greenSuccess};
  position: absolute;
  left: -10rem;
  top: 9.42rem;
  border-radius: 2px;
  padding: 20px;
  width: 10rem;
`;

export const StyledAddButton = styled.button`
  width: 42px;
  height: 42px;
  position: fixed;
  right: 3%;
  bottom: 3%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.common.greenSuccess};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  z-index: 100;
`;
