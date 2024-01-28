import { immer } from 'zustand/middleware/immer';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type MiddlewareStateCreator<T> = StateCreator<
  T,
  [['zustand/immer', never], never],
  [['zustand/persist', never], never],
  T
>;

interface StatesConfigFlashcards {
  difficultGame: number;
  wordsGenMin: number;
  timeOnStage: number;
  peacefulMode: boolean;
  targetLanguage: string;
  customListEnable: boolean;
  customList: {
    listTitle: string;
    listDesc: string;
    listWords: string[];
    listDefinition: string[];
  }[];
}
interface FlashcardsSaveStates {
  attemptIdFlash: number;
  statsLevel1Flash: {
    attemptIdFlash: number;
    score: number;
    time: string;
    scoreMultiplier: number;
    accuracyAnswers: number;
    rightAnswers: number;
    totalAnswers: number;
  }[];
}

interface FlashcardsActionsConfig {
  setDifficultGame: (difficultGameProp: number) => void;
  setWordsGenLimit: (wordsGenMinProp: number) => void;
  setTimeOnStage: (timeOnStageProp: number) => void;
  setPeacefulMode: (peacefulModeProp: boolean) => void;
  setTargetLanguage: (targetLanguageProp: string) => void;
  setCustomListEnable: (customListProp: boolean) => void;
  setCustomList: (dataList: {
    listTitle: string;
    listDesc: string;
    listWords: string[];
    listDefinition: string[];
  }) => void;
  setCleanConfig: () => void;
}
interface FlashcardsActionsSave {
  setNewStats: (data: {
    attemptIdFlash: number;
    score: number;
    time: string;
    scoreMultiplier: number;
    accuracyAnswers: number;
    rightAnswers: number;
    totalAnswers: number;
  }) => void;
  setAttemptIdFlash: () => void;
  setAttemptIdCleanFlash: () => void;
  setInitialSaves: () => void;
}

interface ConfigInterface
  extends StatesConfigFlashcards,
    FlashcardsActionsConfig {}
interface useTimerInterface
  extends FlashcardsSaveStates,
    FlashcardsActionsSave {}

const initialStatesFlashSave: FlashcardsSaveStates = {
  attemptIdFlash: 0,
  statsLevel1Flash: [],
};
const initialStates: StatesConfigFlashcards = {
  difficultGame: 2,
  wordsGenMin: 6,
  timeOnStage: 30,
  targetLanguage: '',
  peacefulMode: false,
  customListEnable: false,
  customList: [],
};

const useConfigSlice: MiddlewareStateCreator<ConfigInterface> = (set) => ({
  ...initialStates,
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
  setTargetLanguage: (targetLanguageProp) => {
    set({ targetLanguage: targetLanguageProp });
  },
  setCustomListEnable: (customListProp) => {
    set({ customListEnable: customListProp });
  },
  setCustomList: (dataList) => {
    set((state) => {
      state.customList.push(dataList);
    });
  },
  setCleanConfig: () => {
    set({ ...initialStates });
  },
});

export const FlashSaveSlice: MiddlewareStateCreator<useTimerInterface> = (
  set,
) => ({
  ...initialStatesFlashSave,
  setNewStats: (data) => {
    set((state) => {
      state.statsLevel1Flash.push(data);
    });
  },
  setAttemptIdFlash: () => {
    set((state) => ({
      attemptIdFlash: state.attemptIdFlash + 1,
    }));
  },
  setAttemptIdCleanFlash: () => {
    set({ attemptIdFlash: 0 });
  },
  setInitialSaves: () => {
    set((state) => {
      state.statsLevel1Flash = [];
    });
  },
});

export const PersistBoundStore = create<useTimerInterface & ConfigInterface>()(
  immer(
    persist(
      (...args) => ({
        ...useConfigSlice(...args),
        ...FlashSaveSlice(...args),
      }),
      {
        name: 'ConfigSaveStorage',
        storage: createJSONStorage(() => localStorage),
        // partialize: (state) => ({
        //   wordsGenMin: state.wordsGenMin,
        //   timeOnStage: state.timeOnStage,
        //   peacefulMode: state.peacefulMode,
        //   targetLanguage: state.targetLanguage,
        // }),
      },
    ),
  ),
);
