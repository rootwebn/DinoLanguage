import axios from 'axios';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSetTranslationStorage } from '@/entities/trainerLevel/model/translationStorage';

export const FetchTranslate = async () => {
  const setDataTranslation = useSetTranslationStorage(
    (state) => state.setDataTranslation,
  );
  const { prioritizedWords } = useFlashCheck();
  const text = JSON.stringify(prioritizedWords);

  const response = await axios.post(
    'http://localhost:5000/translate',
    {
      q: text,
      source: 'en',
      target: 'uk',
      format: 'text',
      api_key: '',
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );

  if (!response.data) {
    throw new Error('Translation request failed');
  }

  return response.data;
};

// export const MutationQuery = () => {
//   return useMutation({
//     mutationFn: FetchTranslate,
//   });
// };

// export async function FetchTranslation() {
//   const { prioritizedWords } = useFlashCheck();
//   const text = JSON.stringify(prioritizedWords);
//
//   const response = await axios.post(
//     'http://localhost:5000/translate',
//     {
//       q: text,
//       source: 'auto',
//       target: 'en',
//       format: 'text',
//       api_key: '',
//     },
//     {
//       headers: { 'Content-Type': 'application/json' },
//     },
//   );
//
//   if (!response.data) {
//     throw new Error('Translation request failed');
//   }
//   return response.data;
// }

// const useTranslateArray = () => {
//   const mutation = useMutation({
//     mutationFn: translateString,
//   });
// };
