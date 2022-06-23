import backgroundVideo from 'assets/videos/blue-ocean.mp4';
import { Button } from 'components/Button/Button';
import { useTips } from 'hooks';
import {
  BackgroundVideo, MainButtonsContainer,
  StyledHomePage
} from 'pages/HomePage/HomePage.styled';

const HomePage = () => {
  const { getTipsPage } = useTips();
  const data = getTipsPage();
  const { title, description, id } = data[0];
  return (
    <StyledHomePage>
      <p>{title}</p>
      <p>{description}</p>
      <p>{id}</p>
      <MainButtonsContainer>
        <Button buttonIconName="eyes">Find your best calm tips</Button>
        <Button buttonIconName="eyes">Relax with some music</Button>
        <Button buttonIconName="eyes">Find your path to peace</Button>
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
    </StyledHomePage>
  );
};

export default HomePage;
