import styled from 'styled-components/macro';
import {  flexCenter } from 'styles/mixins'

export const StyledHomePage = styled.div`
  ${flexCenter('row', 1)}
  border: none;
  padding: 1rem 0rem;
  height: 100vh;
  position: relative;
  background-size: 100% 100%;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  .mainTitle {
    font-size: 1.9rem;
    text-align: center;
  }
  `

export const StyledHomeLeftSide = styled.div`
  width: 50%;
  `
export const StyledHomeRightSide = styled.div`
  width: 50vw;
  background-color: ${({theme}) => theme.palette.common.white};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `
export const StyledAnchor = styled.a`
  text-decoration: none;
  width: 100%;
  button {
    width: 100%;
  }
`

export const BackgroundVideo = styled.video`
  height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
  left: 50%;
  min-height: 100vh;
  min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  z-index: -1;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.66);
  bottom: 0;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`

export const MainButtonsContainer = styled.div`
  width: 380px;
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr;
  gap: 3rem;
`


export const StyledTitle = styled.div`
  margin: 2rem 0;
  font-size: ${({theme}) => theme.font.size.normal};
  border: 2px solid ${({theme}) => theme.palette.common.greenSuccess};
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
  background-color: ${({theme}) => theme.palette.common.greenSuccess};
  color: ${({theme}) => theme.palette.common.white};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  z-index: 100;
`;
