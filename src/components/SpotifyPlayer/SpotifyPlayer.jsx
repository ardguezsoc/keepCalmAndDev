import { StyledSpotifyPlayer } from 'components/SpotifyPlayer/SpotifyPlayer.styled';

export const SpotifyPlayer = ({ hidden }) => {
  //generator&theme=0
  const iframe =
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1dABGukgZ8XKKOdd2rVSHM?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>';
  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
      />
    );
  }

  return (
    <StyledSpotifyPlayer hidden={hidden}>
      <div>
        <Iframe iframe={iframe} />
      </div>
    </StyledSpotifyPlayer>
  );
};
