import { useContext } from 'react';
import { useStore } from 'zustand';
import {
  ConfigContext,
  ConfigState,
} from '@/entities/trainerLevel/model/configFlashcardsStorage';

export function useConfigContext<T>(selector: (state: ConfigState) => T): T {
  const store = useContext(ConfigContext);
  if (!store) throw new Error('Missing ConfigContext.Provider in the tree');
  return useStore(store, selector);
}
