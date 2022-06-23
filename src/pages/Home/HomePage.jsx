import { StyledHomePage } from 'pages/Home/HomePage.styled'
import { useTips } from 'hooks'
import { Button } from 'components/Button/Button'

const HomePage = () => {
  const { getTipsPage } = useTips();
  const data = getTipsPage();
  const { title, description, id } = data[0];
  return (
    <StyledHomePage>
      <p>{title}</p>
      <p>{description}</p>
      <p>{id}</p>
      <div>
        <Button buttonIconName='eyes'>
          Find your best calm tips
        </Button>
        <Button buttonIconName='eyes'>
          Relax with some music
        </Button>
        <Button buttonIconName='eyes'>
          Find your path to peace
        </Button>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
