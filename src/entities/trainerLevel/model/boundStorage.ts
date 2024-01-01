import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { create, StateCreator } from 'zustand';

type MiddlewareStateCreator<T> = StateCreator<
  T,
  [['zustand/immer', never], never],
  [['zustand/devtools', never], never],
  T
>;

interface States {
  score: number;
  scoreMultiplier: number;
  streakAnswers: number;
  attemptId: number;
}
interface StatesGlobalFlash {
  errorFormFlash: boolean;
  prioritizedWordsFull: boolean;
}

interface Actions {
  setScore: (newScore: number) => void;
  setMultiplier: (newMultiplier: number) => void;
  setNumCorrectAnswers: (newNumCorrectAnswers: number) => void;
  setCleanStatsStorage: () => void;
}
interface ActionsGlobalFlash {
  setErrorFlashForm: (propForm: boolean) => void;
  setPrioritizedWordsFull: (propPWords: boolean) => void;
}

interface useStatsInterface extends States, Actions {}
interface useTimerInterface extends StatesGlobalFlash, ActionsGlobalFlash {}

const initialStatesGlobalFlash: StatesGlobalFlash = {
  errorFormFlash: false,
  prioritizedWordsFull: false,
};
const initialStates: States = {
  score: 0,
  scoreMultiplier: 1.0,
  streakAnswers: 0,
  attemptId: 1,
};

const useStatsSlice: MiddlewareStateCreator<useStatsInterface> = (
  set,
  get,
) => ({
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
    const streakAnswersC = get().streakAnswers;
    const updatedStreakAnswers = streakAnswersC + newNumCorrectAnswers;

    if (streakAnswersC === 0 && newNumCorrectAnswers < 0) {
      set({ streakAnswers: streakAnswersC });
    } else {
      set({
        streakAnswers: updatedStreakAnswers,
      });
    }
  },
  setAttemptId: (attemptId: number) => {
    set({ attemptId: (get().attemptId = attemptId + 1) });
  },
  setCleanStatsStorage: () => {
    set({ score: 0 });
    set({ scoreMultiplier: 1.0 });
    set({ streakAnswers: 0 });
  },
});

export const useGlobalFlashSlice: MiddlewareStateCreator<useTimerInterface> = (
  set,
) => ({
  ...initialStatesGlobalFlash,
  setErrorFlashForm: (propForm: boolean) => {
    set({ errorFormFlash: propForm });
  },
  setPrioritizedWordsFull: (propPWords: boolean) => {
    set({ prioritizedWordsFull: propPWords });
  },
});

export const useBoundStore = create<useTimerInterface & useStatsInterface>()(
  immer((...args) => ({
    ...useStatsSlice(...args),
    ...useGlobalFlashSlice(...args),
  })),
);
