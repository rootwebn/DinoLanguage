import { createJSONStorage, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface States {
  stageFlash: number;
}

interface Actions {
  setStageFlash: (newStageFlash: number) => void;
}
interface useStagesInterface extends States, Actions {}

const initialStates: States = {
  stageFlash: 1,
};

export const useSetStagesStorage = create<useStagesInterface>()(
  immer(
    devtools(
      (set, get) => ({
        ...initialStates,
        setStageFlash: (newStageFlash: number) => {
          set({ stageFlash: newStageFlash });
        },
      }),
      {
        name: 'stages-storage',
      },
    ),
  ),
);

export const useStagesStorage = <T>(selector: (state: States) => T): T => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useSetStagesStorage((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
