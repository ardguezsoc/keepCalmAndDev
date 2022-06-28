import axios from 'axios';
import dataTipsMocked from './mockedDataTips';

export const createTipRepository = () => {
  const getTipsPage = async () => {
    return dataTipsMocked;
  };

  const postTip = async (id) => {
    await axios.post(
      `https://860b-80-26-195-161.eu.ngrok.io/Quote/Share/${id}`,
    );
  };

  return {
    getTipsPage,
    postTip,
  };
};
