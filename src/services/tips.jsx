export const createTipService = (tipRepository) => {
  const getTips = async () => {
    const data = await tipRepository.getTipsPage();
    return data;
  };

  return {
    getTips,
  };
};
