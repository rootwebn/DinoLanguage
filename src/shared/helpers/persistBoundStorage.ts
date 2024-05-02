import { immer } from 'zustand/middleware/immer';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { toast } from 'sonner';
import { possibleGameModes, possibleGameLevels, possibleRoles } from './consts';

type MiddlewareStateCreator<T> = StateCreator<
  T,
  [['zustand/immer', never], never],
  [['zustand/persist', never], never],
  T
>;

interface StatesConfigFlashcards {
  wordsGenMin: number;
  timeOnStage: number;
  peacefulMode: boolean;
  targetLanguage: string;
  customList: {
    listTitle: string;
    listDesc: string;
    listId: number;
    listWords: {
      customWord: string;
      customDef: string;
    }[];
  }[];
  currentCustomList: {
    listTitle: string;
    listDesc: string;
    listId: number;
    listWords: {
      customWord: string;
      customDef: string;
    }[];
  };
}
interface FlashcardsSaveStates {
  attemptIdFlash: number;
  attemptIdBrain: number;
  statsLevel1Flash: {
    attemptIdFlash: number;
    score: number;
    time: string;
    scoreMultiplier: number;
    accuracyAnswers: number;
    rightAnswers: number;
    totalAnswers: number;
  }[];
  statsBrain: {
    attemptIdBrain: number;
    score: number;
    time: string;
    scoreMultiplier: number;
    accuracyAnswers: number;
  }[];
}

interface UserStates {
  userRole: (typeof possibleRoles)[number][];
  userName: string;
  userSelectLevel: (typeof possibleGameLevels)[number];
  userGameMode: (typeof possibleGameModes)[number];
}

interface FlashcardsActionsConfig {
  setWordsGenLimit: (wordsGenMinProp: number) => void;
  setTimeOnStage: (timeOnStageProp: number) => void;
  setPeacefulMode: (peacefulModeProp: boolean) => void;
  setTargetLanguage: (targetLanguageProp: string) => void;
  setCustomList: (dataList: {
    listTitle: string;
    listDesc: string;
    listId: number;
    listWords: {
      customWord: string;
      customDef: string;
    }[];
  }) => void;
  setCleanConfig: () => void;
  setCleanCustomList: () => void;
  setCurrentCustomList: (customList: {
    listTitle: string;
    listDesc: string;
    listId: number;
    listWords: {
      customWord: string;
      customDef: string;
    }[];
  }) => void;
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
  setNewBrainStats: (data: {
    attemptIdBrain: number;
    score: number;
    time: string;
    scoreMultiplier: number;
    accuracyAnswers: number;
  }) => void;
  setAttemptIdFlash: () => void;
  setAttemptIdBrain: () => void;
  setClearAttemptIdBrain: () => void;
  setAttemptIdCleanFlash: () => void;
  setInitialSaves: () => void;
}

interface UserActions {
  setUserRole: (role: (typeof possibleRoles)[number]) => void;
  deleteUserRole: (role: (typeof possibleRoles)[number]) => void;
  setDefaultUserRoles: () => void;
  setUserName: (name: string) => void;
  setUserSelectLevel: (gameLevel: (typeof possibleGameLevels)[number]) => void;
  setUserGameMode: (gameMode: (typeof possibleGameModes)[number]) => void;
}

interface ConfigInterface
  extends StatesConfigFlashcards,
    FlashcardsActionsConfig {}
interface useTimerInterface
  extends FlashcardsSaveStates,
    FlashcardsActionsSave {}

interface UserInterface extends UserStates, UserActions {}

const initialStatesFlashSave: FlashcardsSaveStates = {
  attemptIdFlash: 0,
  attemptIdBrain: 0,
  statsLevel1Flash: [],
  statsBrain: [],
};
const initialStates: StatesConfigFlashcards = {
  wordsGenMin: 6,
  timeOnStage: 30,
  targetLanguage: '',
  peacefulMode: false,
  customList: [],
  currentCustomList: {
    listTitle: '',
    listDesc: '',
    listId: 0,
    listWords: [],
  },
};
const initialStatesUser: UserStates = {
  userRole: ['tutorial'],
  userName: '',
  userSelectLevel: '',
  userGameMode: '',
};

const userSlice: MiddlewareStateCreator<UserInterface> = (set, get) => ({
  ...initialStatesUser,
  setUserRole: (role) => {
    const userRoleCurrent = get().userRole;
    const deleteRoleFunc = get().deleteUserRole;
    if (userRoleCurrent.includes(role) && userRoleCurrent.length !== 1) {
      deleteRoleFunc(role);
    } else if (userRoleCurrent.includes(role)) {
      toast.error('You cannot have two of same role!');
    } else {
      set((state) => {
        state.userRole.push(role);
        toast.success(`Success! You have gained role: ${role}`);
      });
    }
  },
  deleteUserRole: (role) => {
    const userRoleCurrent = get().userRole;
    if (userRoleCurrent.length === 0) {
      set({ ...initialStatesUser });
    } else if (userRoleCurrent.includes(role)) {
      set((state) => ({
        userRole: state.userRole.filter((item) => item !== role),
      }));
      toast.success(`Role ${role} deleted successfully.`);
    } else {
      toast.error(`You don't have role ${role} or somethings wrong.`);
    }
  },
  setDefaultUserRoles: () => {
    set({ ...initialStatesUser });
  },
  setUserName: (name) => {
    set({ userName: name });
  },
  setUserSelectLevel: (gameLevel) => {
    set({ userSelectLevel: gameLevel });
  },
  setUserGameMode: (gameMode) => {
    set({ userGameMode: gameMode });
  },
});

const useConfigSlice: MiddlewareStateCreator<ConfigInterface> = (set) => ({
  ...initialStates,
  setWordsGenLimit: (wordsGenMinProp) => {
    set({ wordsGenMin: wordsGenMinProp });
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
  setCustomList: (dataList) => {
    set((state) => {
      state.customList.push(dataList);
    });
  },
  setCleanCustomList: () => {
    set({ customList: [] });
  },
  setCurrentCustomList: (customList) => {
    set({ currentCustomList: customList });
  },
  setCleanConfig: () => {
    set({ ...initialStates });
  },
});

const FlashSaveSlice: MiddlewareStateCreator<useTimerInterface> = (set) => ({
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
  setAttemptIdBrain: () => {
    set((state) => ({
      attemptIdBrain: state.attemptIdBrain + 1,
    }));
  },
  setClearAttemptIdBrain: () => {
    set({ attemptIdBrain: 0 });
  },
  setNewBrainStats: (data) => {
    set((state) => {
      state.statsBrain.push(data);
    });
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

export const PersistBoundStore = create<
  useTimerInterface & ConfigInterface & UserInterface
>()(
  immer(
    persist(
      (...args) => ({
        ...useConfigSlice(...args),
        ...FlashSaveSlice(...args),
        ...userSlice(...args),
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
