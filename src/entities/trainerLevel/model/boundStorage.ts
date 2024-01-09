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
  accuracyAnswers: number;
  rightAnswers: number;
  totalNumAnswers: number;
}
interface StatesFlashConfig {}

interface Actions {
  setScore: (newScore: number) => void;
  setMultiplier: (newMultiplier: number) => void;
  setAccuracyAnswers: () => void;
  setRightAnswers: () => void;
  setTotalNumAnswers: () => void;
  setCleanStatsStorage: () => void;
}
interface ActionsFlashConfig {}

interface useStatsInterface extends States, Actions {}
interface useTimerInterface extends StatesFlashConfig, ActionsFlashConfig {}

const initialStatesFlashConfig: StatesFlashConfig = {};
const initialStates: States = {
  score: 0,
  scoreMultiplier: 1.0,
  streakAnswers: 0,
  accuracyAnswers: 0,
  rightAnswers: 0,
  totalNumAnswers: 0,
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
      set({ score: parseFloat(scoreC.toFixed()) });
    } else {
      set({ score: parseFloat(updatedScore.toFixed()) });
    }
  },
  setMultiplier: (newMultiplier: number) => {
    set({
      scoreMultiplier: parseFloat(
        (get().scoreMultiplier + newMultiplier).toFixed(1),
      ),
    });
  },
  setAccuracyAnswers: () => {
    set((state) => ({
      accuracyAnswers: parseFloat(
        ((state.rightAnswers / state.totalNumAnswers) * 100).toFixed(2),
      ),
    }));
  },
  setTotalNumAnswers: () => {
    set((state) => ({
      totalNumAnswers: state.totalNumAnswers + 1,
    }));
  },
  setRightAnswers: () => {
    set((state) => ({
      rightAnswers: state.rightAnswers + 1,
    }));
  },
  setCleanStatsStorage: () => {
    set({ ...initialStates });
  },
});

export const FlashConfigSlice: MiddlewareStateCreator<useTimerInterface> = (
  set,
) => ({
  ...initialStatesFlashConfig,
});

export const BoundStore = create<useTimerInterface & useStatsInterface>()(
  immer((...args) => ({
    ...useStatsSlice(...args),
    ...FlashConfigSlice(...args),
  })),
);
