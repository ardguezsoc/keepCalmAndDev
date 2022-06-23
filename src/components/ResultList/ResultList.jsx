import { ResultListContainer } from 'components/ResultList/ResultList.styled';
import ResultCard from '../ResultCard';


export const ResultList = ({ results = [] }) => {
  return (
    <ResultListContainer>
      {results.map((result) => (
          <ResultCard
            name={result.name}
            date={result.date}
            description={result.description}
            author={result.author}
          />
      ))}
    </ResultListContainer>
  );
};
