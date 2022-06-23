// import axios from 'axios';

export const createTipRepository = () => {
  const getTipsPage = () => {
    // await axios.get(`url_a_donde_sea/api/v1/Tips`);
    return [
      {
        id: '1',
        title: 'Tile Tip',
        description: 'This is a tip description',
        author: {
          firstname: 'John',
          lastName: 'Doe',
        },
        image: '',
      },
      {
        id: '1',
        title: 'Tile Tip',
        description: 'This is a tip description',
        author: 'John Doe',
        image: '',
      },
      {
        id: '1',
        title: 'Tile Tip',
        description: 'This is a tip description',
        author: 'John Doe',
        image: '',
      },
    ];
  };

  return {
    getTipsPage,
  };
};
