import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface States {
  time: string;
}

interface Actions {
  setTimeStorage: (timeProp: string) => void;
}

interface useTimerInterface extends States, Actions {}

const initialStates: States = {
  time: '',
};

export const useSetTimerStorage = create<useTimerInterface>()(
  immer(
    persist(
      (set) => ({
        ...initialStates,
        setTimeStorage: (timeProp) => {
          set({ time: timeProp });
        },
      }),
      {
        name: 'ZustandTimeLocal',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export const useTimerStorage = <T>(selector: (state: States) => T): T => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useSetTimerStorage((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
