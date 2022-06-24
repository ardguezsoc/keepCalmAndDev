import {StyledTipsPage } from 'pages/TipsPage/TipsPage.styled'
import { useTips } from 'hooks'
import { ResultList } from 'components/ResultList'
import { BackgroundVideo } from 'pages/HomePage/HomePage.styled'
import backgroundVideo from 'assets/videos/soft-waves.mp4';

const TipsPage = () => {
  const { getTipsPage } = useTips();
  const data = getTipsPage();
  const { title, description, id } = data[0];
  return (
    <StyledTipsPage>
      <p>{title}</p>
      <p>{description}</p>
      <p>{id}</p>
      <BackgroundVideo
        height={1080}
        width={1920}
        loop={true}
        autoPlay="autoplay"
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </BackgroundVideo>
      <ResultList results={data} />
    </StyledTipsPage>
  );
};

export default TipsPage;
