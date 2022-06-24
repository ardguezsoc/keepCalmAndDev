import axios from 'axios';

export const createTipRepository = () => {
  const getTipsPage = async () => {
    const { data } = await axios.get(
      `https://860b-80-26-195-161.eu.ngrok.io/Quote`,
    );

    return data;
  };

  return {
    getTipsPage,
  };
};
