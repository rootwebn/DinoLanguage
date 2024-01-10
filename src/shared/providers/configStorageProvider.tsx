'use client';

import React, { useRef } from 'react';
import {
  ConfigProps,
  ConfigStorage,
  createConfigStorage,
  ConfigContext,
} from '@/entities/trainerLevel/model/configFlashcardsStorage';

type ConfigProviderProps = React.PropsWithChildren<ConfigProps>;

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef(createConfigStorage()).current;
  return (
    <ConfigContext.Provider value={storeRef}>{children}</ConfigContext.Provider>
  );
}
