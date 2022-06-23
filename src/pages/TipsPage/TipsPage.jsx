import {StyledTipsPage } from 'pages/TipsPage/TipsPage.styled'
import { useTips } from 'hooks'
import { ResultList } from 'components/ResultList'

const TipsPage = () => {
  const { getTipsPage } = useTips();
  const data = getTipsPage();
  const { title, description, id } = data[0];
  return (
    <StyledTipsPage>
      <p>{title}</p>
      <p>{description}</p>
      <p>{id}</p>
      <ResultList results={data} />
    </StyledTipsPage>
  );
};

export default TipsPage;
