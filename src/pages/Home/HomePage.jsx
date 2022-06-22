import { useTips } from '../../hooks';

const HomePage = () => {
  const { getTipsPage } = useTips();
  const data = getTipsPage();
  const { title, description, id } = data[0];
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{id}</p>
    </div>
  );
};

export default HomePage;
