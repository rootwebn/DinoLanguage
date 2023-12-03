import { create } from 'zustand';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';

interface States {
  words: string[];
  prioritizedWords: string[];
}

interface Actions {
  loadWords: () => void;
  prioritizeWord: (word: string) => void;
  cleanStore: () => void;
}
interface useWordInterface extends States, Actions {}

const initialStates: States = {
  words: [''],
  prioritizedWords: [''],
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
          cleanStore: () => {
            set({ prioritizedWords: (get().prioritizedWords = []) });
            set({ words: (get().words = ['']) });
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

export const useWordsStore = <T extends keyof States>(
  selector: (state: States) => States[T],
): States[T] => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useSetWordsStore((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
