import { create } from 'zustand';
import { wordList } from '@/entities/trainerLevel/model/wordsList';
import { wordListUa } from '@/entities/trainerLevel/model/wordListUa';
import { generateRandomIndex } from '@/entities/trainerLevel/model/generateRandomIndex';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface useWordInterface {
  words: string[];
  wordsTranslate: string[];
  prioritizedWords: string[];
  prioritizedWordsTranslated: string[];
  prioritizeWord: (word: string) => void;
  prioritizeWordTranslated: (word: string) => void;
  loadWords: (forceGenerate?: boolean) => void;
  loadWordsTranslated: (forceGenerate?: boolean) => void;
}

const count = (min: number, max: number) => Math.random() * (max - min) + min;
const indexSet = generateRandomIndex(count(5, 13));
console.log('Generated indexes:', indexSet);

const generateRandomWords = () => {
  const newWords: string[] = [];

  for (let i = 0; i < indexSet.length; i++) {
    const index = indexSet[i];
    const element = wordList[index];
    newWords.push(element);
  }
  return newWords;
};

const generateRandomWordsTranslate = () => {
  const newWordsTranslated: string[] = [];

  for (let i = 0; i < indexSet.length; i++) {
    const index = indexSet[i];
    const element = wordListUa[index];
    newWordsTranslated.push(element);
  }
  return newWordsTranslated;
};

export const useWordsStore = create<useWordInterface>()(
  immer(
    devtools(
      persist(
        (set) => ({
          words: [],
          prioritizedWords: [],
          prioritizedWordsTranslated: [],
          wordsTranslate: [],
          score: 0,
          loadWords: () => {
            const generatedWords = generateRandomWords();
            localStorage.setItem('words', JSON.stringify(generatedWords));
            set({ words: generatedWords });
          },
          loadWordsTranslated: () => {
            const generatedWordsTranslate = generateRandomWordsTranslate();
            localStorage.setItem(
              'wordsTranslate',
              JSON.stringify(generatedWordsTranslate),
            );
            set({ wordsTranslate: generatedWordsTranslate });
          },
          prioritizeWord: (word: string) => {
            set((state) => ({
              prioritizedWords: [...state.prioritizedWords, word],
            }));
          },
          prioritizeWordTranslated: (word: string) => {
            set((state) => ({}));
          },
        }),
        {
          name: 'auth-storage',
        },
      ),
      { name: 'Zustand' },
    ),
  ),
);
