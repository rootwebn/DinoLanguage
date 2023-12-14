import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

// export const FetchResponse = async (text: string[]) => {
//   const response = await fetch('http://localhost:5000/translate', {
//     body: JSON.stringify({
//       q: text,
//       source: 'en',
//       target: 'ru',
//       format: 'text',
//       api_key: '',
//     }),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const responseData = await response.json();
//   console.log(responseData);
//   return responseData;
// };

export const fetchResponseTranslation = async (data: string[]) => {
  const response = await axios.post('http://localhost:5000/translate', {
    q: data,
    source: 'en',
    target: 'ru',
    format: 'text',
    api_key: '',
  });
  return response.data;
};

// useEffect(() => {
//   FetchResponse(prioritizedWords)
//     .then((responseData) => {
//       console.log('Translated Text:', responseData.translatedText);
//       setTranslatedText(responseData.translatedText);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }, [prioritizedWords]);
