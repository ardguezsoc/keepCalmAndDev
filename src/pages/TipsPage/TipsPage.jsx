import { StyledTipsPage } from 'pages/TipsPage/TipsPage.styled';
import { useTips } from 'hooks';
import { BackgroundVideo } from 'pages/HomePage/HomePage.styled';
import backgroundVideo from 'assets/videos/desert.mp4';
import { useEffect, useState } from 'react';

const TipsPage = () => {
  const { getTips } = useTips();
  const [data, setData] = useState([]);
  const checkingData = async () => {
    const data = await getTips();
    setData(data);
  };

  useEffect(() => {
    checkingData();
  }, []);

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
