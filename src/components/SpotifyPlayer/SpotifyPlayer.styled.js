import styled from 'styled-components/macro'

  
  export const StyledSpotifyPlayer = styled.div`
    visibility:${({ hidden }) => hidden ? 'hidden' : 'visible'};
    position: fixed; 
    bottom: 0;
`

