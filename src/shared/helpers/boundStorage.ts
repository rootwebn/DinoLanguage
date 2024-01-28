import { immer } from 'zustand/middleware/immer';
import { create, StateCreator } from 'zustand';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';

type MiddlewareStateCreator<T> = StateCreator<
  T,
  [['zustand/immer', never], never],
  [['zustand/devtools', never], never],
  T
>;

interface FlashcardsStatsGame {
  stageFlash: number;
  score: number;
  scoreMultiplier: number;
  streakAnswers: number;
  accuracyAnswers: number;
  rightAnswers: number;
  totalAnswers: number;
  rightAnswersRow: number;
  wordIndex: number;
  words: string[];
  prioritizedWords: string[];
  translatedWordsRes: {
    translatedWords: string[];
  };
}
interface FlashcardsStatesTimer {
  time: string;
  timeOver: boolean;
}
interface labStates {
  wordsRequest: string;
}

interface FlashcardsActionsGame {
  setStageFlash: (newStageFlash: number) => void;
  setScore: (newScore: number) => void;
  setMultiplier: (newMultiplier: number) => void;
  setAccuracyAnswers: () => void;
  setRightAnswers: () => void;
  setTotalAnswers: () => void;
  setRightAnswersRow: (isFailed: boolean) => void;
  loadWords: (countMin: number, countMax: number) => void;
  prioritizeWord: (word: string) => void;
  setDataTranslation: (translatedWords: string[]) => void;
  setWordIndex: () => void;
  setExactWordIndex: (indexProp: number) => void;
  setInitialWords: () => void;
  setCleanStatsStorage: () => void;
  setInitialStageFlash: () => void;
}
interface FlashcardsActionsTimer {
  setTimerOver: (timeOverProp: boolean) => void;
  setTimeStorage: (timeProp: string) => void;
  setCleanTimeStorage: () => void;
}
interface labActions {
  setWordRequest: (wordProp: string) => void;
}

interface useStatsInterface
  extends FlashcardsStatsGame,
    FlashcardsActionsGame {}
interface useTimerInterface
  extends FlashcardsStatesTimer,
    FlashcardsActionsTimer {}
interface useLabInterface extends labActions, labStates {}

const initialFlashcardsTimer: FlashcardsStatesTimer = {
  time: '',
  timeOver: false,
};
const initialStates: FlashcardsStatsGame = {
  stageFlash: 1,
  score: 0,
  scoreMultiplier: 1.0,
  streakAnswers: 0,
  accuracyAnswers: 0,
  rightAnswers: 0,
  totalAnswers: 0,
  rightAnswersRow: 0,
  wordIndex: 0,
  words: [''],
  prioritizedWords: [],
  translatedWordsRes: {
    translatedWords: [''],
  },
};
const initialLabStates: labStates = {
  wordsRequest: '',
};

const useStatsSlice: MiddlewareStateCreator<useStatsInterface> = (
  set,
  get,
) => ({
  ...initialStates,
  setStageFlash: (newStageFlash: number) => {
    set({ stageFlash: newStageFlash });
  },
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
  setMultiplier: (newMultiplier) => {
    set({
      scoreMultiplier: parseFloat(
        (get().scoreMultiplier + newMultiplier).toFixed(1),
      ),
    });
  },
  setAccuracyAnswers: () => {
    set((state) => ({
      accuracyAnswers: parseFloat(
        ((state.rightAnswers / state.totalAnswers) * 100).toFixed(2),
      ),
    }));
  },
  setTotalAnswers: () => {
    set((state) => ({
      totalAnswers: state.totalAnswers + 1,
    }));
  },
  setRightAnswersRow: (isFailed) => {
    if (isFailed) {
      set(() => ({
        rightAnswersRow: 0,
      }));
    } else {
      set((state) => ({
        rightAnswersRow: state.rightAnswersRow + 1,
      }));
    }
  },
  setRightAnswers: () => {
    set((state) => ({
      rightAnswers: state.rightAnswers + 1,
    }));
  },
  setWordIndex: () => {
    set((state) => ({
      wordIndex: state.wordIndex + 1,
    }));
  },
  setExactWordIndex: (indexProp) => {
    set(() => ({
      wordIndex: indexProp,
    }));
  },
  loadWords: (countMin, countMax) => {
    const generateWords = generateRandomWords(countMin, countMax);
    set({ words: (get().words = generateWords) });
  },
  prioritizeWord: (word: string) => {
    set((state) => {
      state.prioritizedWords.push(word);
    });
  },
  setDataTranslation: (translatedWords: string[]) => {
    set({
      translatedWordsRes: { translatedWords: translatedWords },
    });
  },
  setInitialWords: () => {
    set({
      words: [''],
      prioritizedWords: [],
      translatedWordsRes: { translatedWords: [''] },
    });
  },
  setCleanStatsStorage: () => {
    set({ ...initialStates });
  },
  setInitialStageFlash: () => {
    set((state) => ({
      stageFlash: (state.stageFlash = 1),
    }));
  },
});

const FlashTimerSlice: MiddlewareStateCreator<useTimerInterface> = (set) => ({
  ...initialFlashcardsTimer,
  setTimeStorage: (timeProp) => {
    set({ time: timeProp });
  },
  setTimerOver: (timeOverProp) => {
    set({ timeOver: timeOverProp });
  },
  setCleanTimeStorage: () => {
    set({ time: '' });
  },
});

const labSlice: MiddlewareStateCreator<useLabInterface> = (set) => ({
  ...initialLabStates,
  setWordRequest: (wordProp) => {
    set(() => ({
      wordsRequest: wordProp,
    }));
  },
});

export const BoundStore = create<
  useTimerInterface & useStatsInterface & useLabInterface
>()(
  immer((...args) => ({
    ...useStatsSlice(...args),
    ...FlashTimerSlice(...args),
    ...labSlice(...args),
  })),
);
