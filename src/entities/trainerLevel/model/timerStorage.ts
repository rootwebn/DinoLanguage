import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface States {
  time: string;
}

interface Actions {
  setTimer: (time: string) => void;
}
interface useWordInterface extends States, Actions {}

const initialStates: States = {
  time: '00:00',
};

export const useSetTimerStorage = create<useWordInterface>()(
  immer(
    devtools(
      persist(
        (set) => ({
          ...initialStates,
          setTimer: (newTime: string) => {
            set({ time: newTime });
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

export const useTimerStorage = <T extends keyof States>(
  selector: (state: States) => States[T],
): States[T] => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useSetTimerStorage((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
