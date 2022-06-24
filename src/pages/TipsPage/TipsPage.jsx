import {
  StyleAuthorSpan,
  StyledCarousel,
  StyledTipsPage,
  StyleQuoteSpan,
  StyleSlideCarousel,
} from 'pages/TipsPage/TipsPage.styled';
import { useTips } from 'hooks';
import { StyledBackgroundVideo } from 'pages/HomePage/HomePage.styled';
import backgroundVideo from 'assets/videos/desert.mp4';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Draggable from 'react-draggable';
import { StyledSvgIconReact } from 'components/SvgIconReact/SvgIconReact.styled';

const TipsPage = () => {
  const { getTips, postTip } = useTips();
  const [data, setData] = useState([]);
  const checkingData = async () => {
    const data = await getTips();
    setData(data);
  };

  useEffect(() => {
    checkingData();
  }, []);

  const handleClick = async (id) => {
    await postTip(data[id === 9 ? 0 : id - 1].id);
  };

  return (
    <StyledTipsPage>
      <StyledBackgroundVideo
        height={1080}
        width={1920}
        loop={true}
        autoPlay="autoplay"
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </StyledBackgroundVideo>
      <StyledCarousel onClickItem={(data) => console.log(data)}>
        <Carousel
          onChange={(data) => handleClick(data)}
          showIndicators={false}
          infiniteLoop={true}
          stopOnHover={true}
          showStatus={false}
          centerMode={false}
        >
          {data.map((item, idx) => (
            <StyleSlideCarousel key={'slide' + idx}>
              <StyleAuthorSpan>{item.author}</StyleAuthorSpan>
              <br />
              <StyleQuoteSpan>"{item.quote}"</StyleQuoteSpan>
            </StyleSlideCarousel>
          ))}
        </Carousel>
      </StyledCarousel>
      <Draggable>
        <StyledSvgIconReact
          size={'xLarge'}
          iconName="send"
          filter="invert(100%) sepia(0%) saturate(0%) hue-rotate(296deg) brightness(108%) contrast(101%)"
          onClick={() => {
            const data = document.getElementsByClassName(
              'control-arrow control-next',
            );
            data[0].click();
          }}
        />
      </Draggable>
    </StyledTipsPage>
  );
};

export default TipsPage;
