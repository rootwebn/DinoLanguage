import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface States {
  time: string;
}

interface Actions {
  setTimer: (time: string) => void;
  setCleanTimer: () => void;
}
interface useTimerInterface extends States, Actions {}

const initialStates: States = {
  time: '00:00',
};

export const useSetTimerStorage = create<useTimerInterface>()(
  immer(
    devtools(
      (set) => ({
        ...initialStates,
        setTimer: (newTime: string) => {
          set({ time: newTime });
        },
        setCleanTimer: () => {
          set({ time: '00:00' });
        },
      }),
      { name: 'ZustandStatsLocal' },
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
