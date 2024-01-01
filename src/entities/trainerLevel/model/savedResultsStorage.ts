import { createStore } from 'zustand/vanilla';
import React, { createContext, useRef } from 'react';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface SaveProps {
  statsLevel1Flash: {
    attemptId: number;
    score: number;
    streak: number;
    scoreMultiplier: number;
  }[];
}

export interface SaveState extends SaveProps {
  setNewStats: (data: {
    attemptId: number;
    score: number;
    streak: number;
    scoreMultiplier: number;
  }) => void;
  setEmptyStorage: (data: {
    attemptId: number;
    score: number;
    streak: number;
    scoreMultiplier: number;
  }) => void;
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
            set((state) => ({
              ...state,
              statsLevel1Flash: [...state.statsLevel1Flash, data],
            }));
          },
          setEmptyStorage: (data) => {
            set((state) => ({
              ...state,
              statsLevel1Flash: [...state.statsLevel1Flash, data],
            }));
          },
        }),
        { name: 'SaveStorage', storage: createJSONStorage(() => localStorage) },
      ),
    ),
  );
};

export const SaveContext = createContext<SaveStorage | null>(null);

// export const useStatsStorage = create<useSaveInterface>()(
//   immer(
//     persist(
//       (set) => ({
//         ...initialStates,
//         setNewStats: (data) => {
//           set((state) => {
//             state.statsLevel1Flash.push(data);
//           });
//         },
//       }),
//       {
//         name: 'statsSaveStorage',
//         storage: createJSONStorage(() => localStorage),
//       },
//     ),
//   ),
// );
