import { StyledHomePage } from 'pages/Home/HomePage.styled'
import { useTips } from 'hooks'

const HomePage = () => {
  const { getTipsPage } = useTips();
  const data = getTipsPage();
  const { title, description, id } = data[0];
  return (
    <StyledHomePage>
      <p>{title}</p>
      <p>{description}</p>
      <p>{id}</p>
    </StyledHomePage>
  );
};

export default HomePage;
