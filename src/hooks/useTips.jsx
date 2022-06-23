import { useContext } from 'react';
import { ContentContext } from 'contexts';

export const useTips = () => {
  const { tipsService } = useContext(ContentContext);
  return { ...tipsService };
};

export default useTips;
