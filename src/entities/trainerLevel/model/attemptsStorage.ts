import { create } from 'zustand';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';
import { useSetWordsStore } from '@/entities/trainerLevel/model/wordsStorage';

interface States {
  attemptIdFlash: number;
}

interface Actions {
  setAttemptIdFlash: () => void;
  setAttemptIdCleanFlash: () => void;
}
interface useAttemptInterface extends States, Actions {}

const initialStates: States = {
  attemptIdFlash: 0,
};

export const useSetAttemptStore = create<useAttemptInterface>()(
  immer(
    persist(
      (set, get) => ({
        ...initialStates,
        setAttemptIdFlash: () => {
          set((state) => ({
            attemptIdFlash: state.attemptIdFlash + 1,
          }));
        },
        setAttemptIdCleanFlash: () => {
          set({ attemptIdFlash: 0 });
        },
      }),
      { name: 'Zustand', storage: createJSONStorage(() => localStorage) },
    ),
  ),
);

export const useAttemptStore = <T>(selector: (state: States) => T): T => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useSetAttemptStore((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
