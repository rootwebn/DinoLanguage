import { create } from 'zustand';
import { wordList } from '@/entities/trainerLevel/model/wordsList';
import { wordListUa } from '@/entities/trainerLevel/model/wordListUa';
import { generateRandomIndex } from '@/entities/trainerLevel/model/generateRandomIndex';

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
const newWords: string[] = [];
const newWordsTranslated: string[] = [];
const indexSet = generateRandomIndex(count(5, 13));

const generateRandomWords = () => {
  for (let i = 0; i < indexSet.length; i++) {
    const index = indexSet[i];
    const element = wordList[index];
    newWords.push(element);
  }
  return newWords;
};

const generateRandomWordsTranslate = () => {
  for (let i = 0; i < indexSet.length; i++) {
    const indexTr = indexSet[i];
    const elementTr = wordListUa[indexTr];
    newWordsTranslated.push(elementTr);
  }
  return newWordsTranslated;
};

export const useWordsStore = create<useWordInterface>((set) => ({
  words: [],
  prioritizedWords: [],
  prioritizedWordsTranslated: [],
  wordsTranslate: [],
  score: 0,
  loadWords: () => {
    const generatedWords = generateRandomWords();
    sessionStorage.setItem('words', JSON.stringify(generatedWords));
    set({ words: generatedWords });
  },
  loadWordsTranslated: () => {
    const generatedWordsTranslate = generateRandomWordsTranslate();
    sessionStorage.setItem(
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
    set((state) => ({
      prioritizedWordsTranslated: [...state.prioritizedWordsTranslated, word],
    }));
  },
}));
