import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const fetchWordInfo = async (wordRequest: string) => {
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${wordRequest}`,
  );
  return response.data;
};

export type DictionaryEntry = {
  wordTranslate: string;
  word: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
};

export { fetchWordInfo };
