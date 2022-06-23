import { createContext } from 'react';
import { createTipService } from 'services';
import { createTipRepository } from 'repositories';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const tipsRepository = createTipRepository();
  const tipsService = createTipService(tipsRepository);

  return (
    <ContentContext.Provider value={{ tipsService }}>
      {children}
    </ContentContext.Provider>
  );
};
