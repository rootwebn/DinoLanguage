import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface States {
  score: number;
  scoreMultiplier: number;
  numCorrectAnswers: number;
  statsLevel1: {
    score: number;
    multiplier: number;
    streak: number;
  };
}

interface Actions {
  setScore: (newScore: number) => void;
  setMultiplier: (newMultiplier: number) => void;
  setNumCorrectAnswers: (newNumCorrectAnswers: number) => void;
  setStatsLevel1: (score: number, multiplier: number, streak: number) => void;
  setCleanStatsStorage: () => void;
}
interface useStatsInterface extends States, Actions {}

const initialStates: States = {
  score: 0,
  scoreMultiplier: 1.0,
  numCorrectAnswers: 0,
  statsLevel1: {
    score: 0,
    multiplier: 1.0,
    streak: 0,
  },
};

export const useSetStatsStorage = create<useStatsInterface>()(
  immer(
    devtools(
      persist(
        (set, get) => ({
          ...initialStates,
          setScore: (newScore: number) => {
            const scoreMultiplier = get().scoreMultiplier;
            const scoreC = get().score;
            const updatedScore = scoreC + newScore * scoreMultiplier;
            if (scoreC === 0 && updatedScore < 0) {
              set({ score: scoreC });
            } else {
              set({ score: updatedScore });
            }
          },
          setMultiplier: (newMultiplier: number) => {
            set({ scoreMultiplier: get().scoreMultiplier + newMultiplier });
          },
          setNumCorrectAnswers: (newNumCorrectAnswers: number) => {
            const numCorrectAnswersC = get().numCorrectAnswers;
            const updatedNumCorrectAnswers =
              numCorrectAnswersC + newNumCorrectAnswers;

            if (numCorrectAnswersC === 0 && newNumCorrectAnswers < 0) {
              set({ numCorrectAnswers: numCorrectAnswersC });
            } else {
              set({
                numCorrectAnswers: updatedNumCorrectAnswers,
              });
            }
          },
          setStatsLevel1: (
            score: number,
            multiplier: number,
            numStreak: number,
          ) => {
            set({
              statsLevel1: {
                score: (get().score = score),
                multiplier: (get().scoreMultiplier = multiplier),
                streak: (get().numCorrectAnswers = numStreak),
              },
            });
          },
          setCleanStatsStorage: () => {
            set({ score: 0 });
            set({ scoreMultiplier: 1.0 });
            set({ numCorrectAnswers: 0 });
          },
        }),
        {
          name: 'stats-storage',
          storage: createJSONStorage(() => localStorage),
        },
      ),
      { name: 'ZustandStatsLocal' },
    ),
  ),
);

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
