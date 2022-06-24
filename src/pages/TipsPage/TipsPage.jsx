import {StyledTipsPage } from 'pages/TipsPage/TipsPage.styled'
import { useTips } from 'hooks'
import { BackgroundVideo } from 'pages/HomePage/HomePage.styled'
import backgroundVideo from 'assets/videos/desert.mp4';

const TipsPage = () => {
  const { getTipsPage } = useTips();
  const data = getTipsPage();
  // eslint-disable-next-line no-unused-vars
  const { title, description, id } = data[0];
  return (
    <StyledTipsPage>
      <BackgroundVideo
        height={1080}
        width={1920}
        loop={true}
        autoPlay="autoplay"
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </BackgroundVideo>
    </StyledTipsPage>
  );
};

export default TipsPage;
