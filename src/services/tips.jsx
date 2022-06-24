export const createTipService = (tipRepository) => {
  const getTips = async () => {
    const data = await tipRepository.getTipsPage();
    return data;
  };

  const postTip = async (id) => {
    await tipRepository.postTip(id);
  };

  return {
    getTips,
    postTip,
  };
};
