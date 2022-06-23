import { StyledResultCard } from 'components/ResultCard/ResultCard.styled'
import { ResultCardImage } from 'components/ResultCardImage/ResultCardImage'

export const ResultCard = ({ name, title,description, author, date }) => {
  const getDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formatDate = getDate.toLocaleDateString(undefined, options);
  const { firstname, lastname } = author;

  return (
    <StyledResultCard>
      <ResultCardImage />
      <div className="infoSection">
        <div className="name">
          <span className="name-text">{name}</span>
        </div>
        <p className="author">
          {firstname} {lastname}
        </p>
        <p className="category">{title}</p>
        <p className="category">{description}</p>
        <p className="date">{formatDate}</p>
      </div>
    </StyledResultCard>
  );
};
