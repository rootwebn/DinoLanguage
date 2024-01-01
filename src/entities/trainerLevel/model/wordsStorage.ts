import { create } from 'zustand';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';

interface States {
  words: string[];
  prioritizedWords: string[];
  translatedWordsRes: {
    translatedWords: string[];
  };
}

interface Actions {
  loadWords: () => void;
  prioritizeWord: (word: string) => void;
  setDataTranslation: (translatedWords: string[]) => void;
}
interface useWordInterface extends States, Actions {}

const initialStates: States = {
  words: [''],
  prioritizedWords: [],
  translatedWordsRes: {
    translatedWords: [''],
  },
};

export const useSetWordsStore = create<useWordInterface>()(
  immer(
    devtools(
      (set, get) => ({
        ...initialStates,
        loadWords: () => {
          const generateWords = generateRandomWords();
          set({ words: (get().words = generateWords) });
        },
        prioritizeWord: (word: string) => {
          set((state) => {
            state.prioritizedWords.push(word);
          });
        },
        setDataTranslation: (translatedWords: string[]) => {
          set({
            translatedWordsRes: { translatedWords: translatedWords },
          });
        },
      }),
      { name: 'Zustand' },
    ),
  ),
);

export const useWordsStore = <T>(selector: (state: States) => T): T => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useSetWordsStore((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
