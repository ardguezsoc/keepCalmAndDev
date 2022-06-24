import styled from 'styled-components/macro';

export const StyledTipsPage = styled.div`
  border: none;
  padding: 1rem 0;
  height: 100vh;
  position: relative;
  background-size: 100% 100%;
  width: 100vw;

  .mainTitle {
    font-size: 1.9rem;
    text-align: center;
  }
`;

export const StyledCarousel = styled.div`
  height: 100%;

  .carousel-root {
    margin: 0 auto;
    position: relative;
    top: 25%;
    width: 80%;
    display: block;
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: none;
  }
`

export const StyleSlideCarousel = styled.div`
  color: white;
  font-size: 2em;
  font-weight: bolder;
  padding: 1em;
`

export const StyleQuoteSpan =styled.span`
  text-shadow: 1px 1px #bc9370;
    `

export const StyleAuthorSpan =styled.span`
  font-style: italic;
  font-size: 0.7em;
  color: #5b5858;
  font-weight: lighter;
  padding-left: 1em;
  border-left: 2px solid;
    `
