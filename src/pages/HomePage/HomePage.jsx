import React, { useState } from 'react';
import backgroundVideo from 'assets/videos/blue-ocean.mp4';
import { Button } from 'components/Button/Button';
import { SpotifyPlayer } from 'components/SpotifyPlayer/SpotifyPlayer';
import { StyledSvgIconReact } from 'components/SvgIconReact/SvgIconReact.styled';
import Draggable from 'react-draggable';
import {
  MainButtonsContainer,
  StyledHomePage,
  StyledHomeLeftSide,
  StyledHomeRightSide,
  StyledAnchor,
  StyledBackgroundVideo,
} from 'pages/HomePage/HomePage.styled';
import { MAIN_PAGES_ROUTES } from 'constants/routes';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { ResultCardImage } from 'components/ResultCardImage/ResultCardImage';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    height: '500px',
    width: '500px',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
};

const HomePage = () => {
  let navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [visibilityPlayerStatus, setVisibilityPlayerStatus] = useState(true);
  const handleClickTips = () => {
    navigate(MAIN_PAGES_ROUTES.TIPS_PAGE);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <StyledHomePage>
      <StyledHomeLeftSide>
        <StyledBackgroundVideo
          height={1080}
          width={1920}
          loop={true}
          autoPlay="autoplay"
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
        </StyledBackgroundVideo>
      </StyledHomeLeftSide>
      <StyledHomeRightSide>
        <MainButtonsContainer>
          <Button onClick={handleClickTips} size={'xLarge'}>
            Quote of the day
          </Button>
          <Button onClick={openModal} size={'xLarge'}>
            Daily motivation
          </Button>
          <StyledAnchor
            href="https://davidubuntu.github.io/duality/"
            target="_blank"
          >
            <Button size={'xLarge'}>Play duality game</Button>
          </StyledAnchor>
        </MainButtonsContainer>
        <SpotifyPlayer hidden={visibilityPlayerStatus} />
        <Draggable>
          <StyledSvgIconReact
            size={'xLarge'}
            iconName="music"
            filter="invert(67%) sepia(9%) saturate(676%) hue-rotate(129deg) brightness(92%) contrast(93%)"
            onClick={() => setVisibilityPlayerStatus(!visibilityPlayerStatus)}
          />
        </Draggable>
      </StyledHomeRightSide>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ResultCardImage />
      </Modal>
    </StyledHomePage>
  );
};

export default HomePage;
