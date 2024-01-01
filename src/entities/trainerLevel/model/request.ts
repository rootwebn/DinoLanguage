import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
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
