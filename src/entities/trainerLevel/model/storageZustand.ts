import { create } from 'zustand';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';

interface States {
  words: string[];
  prioritizedWords: string[];
  translatedText: string[];
}

interface Actions {
  loadWords: () => void;
  prioritizeWord: (word: string) => void;
  setDataTranslation: (translatedWords: string[]) => void;
  cleanStore: () => void;
  cleanStoreTranslation: () => void;
}
interface useWordInterface extends States, Actions {}

const initialStates: States = {
  words: [''],
  prioritizedWords: [''],
  translatedText: [''],
};

export const useSetWordsStore = create<useWordInterface>()(
  immer(
    devtools(
      persist(
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
            set({ translatedText: (get().translatedText = translatedWords) });
          },
          cleanStore: () => {
            set({ prioritizedWords: (get().prioritizedWords = []) });
            set({ words: (get().words = ['']) });
          },
          cleanStoreTranslation: () => {
            set({ translatedText: (get().translatedText = ['']) });
          },
        }),
        {
          name: 'auth-storage',
          storage: createJSONStorage(() => localStorage),
        },
      ),
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
