import { createJSONStorage, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface States {
  time: string;
  score: number;
}

interface Actions {
  setTimer: (time: string) => void;
  setScore: (score: number) => void;
}
interface useWordInterface extends States, Actions {}

const initialStates: States = {
  time: '00:00',
  score: 1000,
};

export const useSetStatsStorage = create<useWordInterface>()(
  immer(
    devtools(
      (set, get) => ({
        ...initialStates,
        setTimer: (newTime: string) => {
          set({ time: newTime });
        },
        setScore: (newScore: number) => {
          set({ score: get().score + newScore });
        },
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

// export const useTimerStorage = <T extends keyof States>(
//   selector: (state: States) => States[T],
// ): States[T] => {
//   const [state, setState] = useState(selector(initialStates));
//   const zustandState = useSetTimerStorage((persistedState) =>
//     selector(persistedState),
//   );
//
//   useEffect(() => {
//     setState(zustandState);
//   }, [zustandState]);
//
//   return state;
// };
export const useStatsStorage = <T>(selector: (state: States) => T): T => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useSetStatsStorage((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
