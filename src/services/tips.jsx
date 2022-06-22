export const createTipService = (tipRepository) => {
  const getTipsPage = () => tipRepository.getTipsPage();

  return {
    getTipsPage,
  };
};
