import { createStore } from 'zustand/vanilla';
import { createContext } from 'react';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { state } from 'sucrase/dist/types/parser/traverser/base';

export interface ConfigProps {
  difficultGame: number;
  wordsGenMin: number;
  timeOnStage: number;
  peacefulMode: boolean;
}
export interface ConfigState extends ConfigProps {
  setDifficultGame: (difficultGameProp: number) => void;
  setWordsGenLimit: (wordsGenMinProp: number) => void;
  setTimeOnStage: (timeOnStageProp: number) => void;
  setPeacefulMode: (peacefulModeProp: boolean) => void;
  setCleanStorage: () => void;
}
export type ConfigStorage = ReturnType<typeof createConfigStorage>;

export const createConfigStorage = (initProps?: Partial<ConfigProps>) => {
  const DEFAULT_PROPS: ConfigProps = {
    difficultGame: 2,
    wordsGenMin: 6,
    timeOnStage: 30,
    peacefulMode: false,
  };
  return createStore<ConfigState>()(
    immer(
      persist(
        (set) => ({
          ...DEFAULT_PROPS,
          ...initProps,
          setWordsGenLimit: (wordsGenMinProp) => {
            set({ wordsGenMin: wordsGenMinProp });
          },
          setDifficultGame: (difficultGameProp) => {
            set({ difficultGame: difficultGameProp });
          },
          setTimeOnStage: (timeOnStageProp) => {
            set({ timeOnStage: timeOnStageProp });
          },
          setPeacefulMode: (peacefulModeProp) => {
            set({ peacefulMode: peacefulModeProp });
          },
          setCleanStorage: () => {
            set({ ...DEFAULT_PROPS });
          },
        }),
        {
          name: 'ConfigStorage',
          storage: createJSONStorage(() => localStorage),
          partialize: (state) => ({
            difficultGame: state.difficultGame,
            peacefulMode: state.peacefulMode,
            timeOnStage: state.timeOnStage,
            wordsGenMin: state.wordsGenMin,
          }),
        },
      ),
    ),
  );
};

export const ConfigContext = createContext<ConfigStorage | null>(null);
