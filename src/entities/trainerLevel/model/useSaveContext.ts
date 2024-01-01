import { useContext } from 'react';
import { useStore } from 'zustand';
import {
  SaveContext,
  SaveState,
} from '@/entities/trainerLevel/model/savedResultsStorage';

export function useSaveContext<T>(selector: (state: SaveState) => T): T {
  const store = useContext(SaveContext);
  if (!store) throw new Error('Missing SaveContext.Provider in the tree');
  return useStore(store, selector);
}
