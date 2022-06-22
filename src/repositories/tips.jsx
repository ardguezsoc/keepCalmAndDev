// import axios from 'axios';

export const createTipRepository = () => {
  const getTipsPage = () => {
    // await axios.get(`url_a_donde_sea/api/v1/Tips`);
    return [
      {
        id: '1',
        title: 'Tile Tip',
        description: 'This is a description',
        image: '',
      },
    ];
  };

  return {
    getTipsPage,
  };
};
