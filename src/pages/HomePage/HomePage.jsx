import React, { useState } from 'react';
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
import {  useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import { ResultCardImage } from 'components/ResultCardImage/ResultCardImage'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    height:'500px',
    width:'500px',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px'
  },
};

const HomePage = () => {
  let navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [visibilityPlayerStatus, setVisibilityPlayerStatus] = useState(true);
  const handleClickTips = () => {
    navigate(MAIN_PAGES_ROUTES.TIPS_PAGE);
  };

  const openModal = ()=> {
    setIsOpen(true);
  }

  const afterOpenModal=() =>{
    // references are now sync'd and can be accessed.
  }

  const closeModal=()=> {
    setIsOpen(false);
  }

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
        <Button
          onClick={openModal}
          size={'xLarge'}
        >
         Daily motivational sentece
        </Button>
        <StyledAnchor href="https://davidubuntu.github.io/duality/">
          <Button  size={'xLarge'} >Enjoy duality game</Button>
        </StyledAnchor>
      </MainButtonsContainer>
      <SpotifyPlayer hidden={visibilityPlayerStatus} />
      </StyledHomeRightSide>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ResultCardImage/>
      </Modal>
    </StyledHomePage>
  );
};

export default HomePage;
