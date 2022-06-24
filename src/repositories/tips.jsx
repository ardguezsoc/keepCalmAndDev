import axios from 'axios';

export const createTipRepository = () => {
  const getTipsPage = () => {
    const response =  axios.get(`https://860b-80-26-195-161.eu.ngrok.io/Quote`);
    console.log(response)
    return [
      {
        id: '1',
        quote: 'The things we do without looking forward to them are the best because we don\'t have any expectations. Then the magic happens',
        author: 'Natalie Howlie',
        quoteDate:'2022-06-24T10:34:28.8717249Z'
      },
      {
        id: '2',
        quote: 'Nothing ever goes away until it has taught us what we need to know',
        author: 'Pema Chodron',
        quoteDate:'2022-06-24T10:34:28.8717249Z'
      },
      {
        id: '3',
        quote: 'The feeling that any task is a nuisance will soon disappear if it is done in mindfulness',
        author: 'Thích Nhất Hạnh',
        quoteDate:'2022-06-24T10:34:28.8717249Z'
      },
      {
        id: '4',
        quote: 'Mindfulness is a way of befriending ourselves and our experience.',
        author: 'Jon Kabat-Zinn',
        quoteDate:'2022-06-24T10:34:28.8717249Z'
      }
    ];
  };

  return {
    getTipsPage,
  };
};
