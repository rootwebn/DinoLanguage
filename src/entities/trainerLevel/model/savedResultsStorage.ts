import { createStore } from 'zustand/vanilla';
import { createContext } from 'react';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface SaveProps {
  statsLevel1Flash: {
    attemptId: number;
    score: number;
    time: string;
    scoreMultiplier: number;
    accuracyAnswers: number;
    rightAnswers: number;
    totalNumAnswers: number;
  }[];
}
//! make save system even bigger (prepare system to different modes, add time, accuracy, etc. )
//! and make brand new select modes menu (random, custom, themed, add configuration before start game
//! (targeted language, how hard, how long, how much mistakes you can make, etc.))
//! also fix fucking ui in flashcard game and make it clear and beautiful;
export interface SaveState extends SaveProps {
  setNewStats: (data: {
    attemptId: number;
    score: number;
    time: string;
    scoreMultiplier: number;
    accuracyAnswers: number;
    rightAnswers: number;
    totalNumAnswers: number;
  }) => void;
  setCleanStats: () => void;
}
export type SaveStorage = ReturnType<typeof createSaveStorage>;

export const createSaveStorage = (initProps?: Partial<SaveProps>) => {
  const DEFAULT_PROPS: SaveProps = {
    statsLevel1Flash: [],
  };
  return createStore<SaveState>()(
    immer(
      persist(
        (set) => ({
          ...DEFAULT_PROPS,
          ...initProps,
          setNewStats: (data) => {
            set((state) => {
              state.statsLevel1Flash.push(data);
            });
          },
          setCleanStats: () => {
            set((state) => {
              state.statsLevel1Flash = [];
            });
          },
        }),
        { name: 'SaveStorage', storage: createJSONStorage(() => localStorage) },
      ),
    ),
  );
};

export const SaveContext = createContext<SaveStorage | null>(null);
