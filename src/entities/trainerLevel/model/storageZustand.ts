import { create } from 'zustand';
import { wordList } from '@/entities/trainerLevel/model/wordsList';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';

interface States {
  words: string[];
}
interface Actions {
  loadWords: () => void;
}
interface useWordInterface extends States, Actions {}

const initialStates: States = {
  words: [''],
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
        }),
        {
          name: 'auth-storage',
          // skipHydration: true,
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
