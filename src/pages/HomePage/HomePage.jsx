import { useState } from 'react';
import backgroundVideo from 'assets/videos/blue-ocean.mp4';
import { Button } from 'components/Button/Button';
import { SpotifyPlayer } from 'components/SpotifyPlayer/SpotifyPlayer';
import {
  BackgroundVideo,
  MainButtonsContainer,
  StyledHomePage,
  StyledHomeLeftSide,
  StyledHomeRightSide,
  StyledAnchor
} from 'pages/HomePage/HomePage.styled'
import { MAIN_PAGES_ROUTES } from 'constants/routes';
import { Link, useNavigate } from 'react-router-dom'
const HomePage = () => {
  let navigate = useNavigate();
  const [visibilityPlayerStatus, setVisibilityPlayerStatus] = useState(true);
  const handleClickTips = () => {
    navigate(MAIN_PAGES_ROUTES.TIPS_PAGE);
  };

  return (
    <StyledHomePage>
      <StyledHomeLeftSide>
        <BackgroundVideo
          height={1080}
          width={1920}
          loop={true}
          autoPlay="autoplay"
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
        </BackgroundVideo>
      </StyledHomeLeftSide>
      <StyledHomeRightSide>
      <MainButtonsContainer>
        <Button  onClick={handleClickTips} size={'xLarge'}>
          Find your best calm tips
        </Button>
        <Button

          onClick={() => setVisibilityPlayerStatus(!visibilityPlayerStatus)}
          size={'xLarge'}
        >
          Relax with some music
        </Button>
        <StyledAnchor href="https://davidubuntu.github.io/duality/">
          <Button  size={'xLarge'} >Enjoy duality game</Button>
        </StyledAnchor>
      </MainButtonsContainer>
      <SpotifyPlayer hidden={visibilityPlayerStatus} />
      </StyledHomeRightSide>
    </StyledHomePage>
  );
};

export default HomePage;
