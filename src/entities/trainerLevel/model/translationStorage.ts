import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { useEffect, useState } from 'react';

interface StatesTranslation {
  translatedText: string[];
}

interface ActionTranslation {
  setDataTranslation: (translatedWords: string[]) => void;
  cleanStoreTranslation: () => void;
}

interface TranslationStorageInterface
  extends ActionTranslation,
    StatesTranslation {}

const initialStateTranslation: StatesTranslation = {
  translatedText: [''],
};

export const useSetTranslationStorage = create<TranslationStorageInterface>()(
  immer(
    devtools(
      persist(
        (set, get) => ({
          ...initialStateTranslation,
          setDataTranslation: (translatedWords: string[]) => {
            set({ translatedText: (get().translatedText = translatedWords) });
          },
          cleanStoreTranslation: () => {
            set({ translatedText: (get().translatedText = ['']) });
          },
        }),
        {
          name: 'tran-storage',
          storage: createJSONStorage(() => localStorage),
        },
      ),
      { name: 'ZustandTran' },
    ),
  ),
);

export const useTranslationStore = <T extends keyof StatesTranslation>(
  selector: (state: StatesTranslation) => StatesTranslation[T],
): StatesTranslation[T] => {
  const [state, setState] = useState(selector(initialStateTranslation));
  const translationState = useSetTranslationStorage((persistedState) =>
    selector(persistedState),
  );

  useEffect(() => {
    setState(translationState);
  }, [translationState]);

  return state;
};
