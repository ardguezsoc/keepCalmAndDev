import backgroundVideo from 'assets/videos/blue-ocean.mp4';
import { Button } from 'components/Button/Button';
import {
  BackgroundVideo,
  MainButtonsContainer, MainImageContainer,
  StyledHomePage
} from 'pages/HomePage/HomePage.styled'
import { MAIN_PAGES_ROUTES } from 'constants/routes'
import { useNavigate } from "react-router-dom";
import { ResultCardImage } from 'components/ResultCardImage/ResultCardImage'
const HomePage = () => {
  let navigate = useNavigate();
  const handleClickTips = ()=>{
    navigate(MAIN_PAGES_ROUTES.TIPS_PAGE)
  }
  return (
    <StyledHomePage>
      <MainButtonsContainer>
        <Button buttonIconName="eyes" onClick={handleClickTips}>Find your best calm tips</Button>
        <Button buttonIconName="eyes">Relax with some music</Button>
        <Button buttonIconName="eyes">Find your path to peace</Button>
      </MainButtonsContainer>
      <MainImageContainer>
        <ResultCardImage/>
      </MainImageContainer>

      <BackgroundVideo
        height={1080}
        width={1920}
        loop={true}
        autoPlay="autoplay"
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </BackgroundVideo>
    </StyledHomePage>
  );
};

export default HomePage;
