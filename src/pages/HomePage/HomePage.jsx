import { useState } from 'react';
import backgroundVideo from 'assets/videos/blue-ocean.mp4';
import { Button } from 'components/Button/Button';
import { SpotifyPlayer } from 'components/SpotifyPlayer/SpotifyPlayer';
import {
  BackgroundVideo,
  MainButtonsContainer,
  StyledHomePage,
} from 'pages/HomePage/HomePage.styled';
import { MAIN_PAGES_ROUTES } from 'constants/routes';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  let navigate = useNavigate();
  const [visibilityPlayerStatus, setVisibilityPlayerStatus] = useState(true);
  const handleClickTips = () => {
    navigate(MAIN_PAGES_ROUTES.TIPS_PAGE);
  };

  return (
    <StyledHomePage>
      <MainButtonsContainer>
        <Button buttonIconName="eyes" onClick={handleClickTips}>
          Find your best calm tips
        </Button>
        <Button
          buttonIconName="eyes"
          onClick={() => setVisibilityPlayerStatus(!visibilityPlayerStatus)}
        >
          Relax with some music
        </Button>
        <Button buttonIconName="eyes">Play some music</Button>
      </MainButtonsContainer>

      <BackgroundVideo
        height={1080}
        width={1920}
        loop={true}
        autoPlay="autoplay"
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </BackgroundVideo>
      <SpotifyPlayer hidden={visibilityPlayerStatus} />
    </StyledHomePage>
  );
};

export default HomePage;
