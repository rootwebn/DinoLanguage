import { useState } from 'react';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';

export const useBrainstormRun = () => {
  const { gameChallenge, setGameChallenge } = BoundStore();
  const {} = PersistBoundStore();

  if (gameChallenge === 'falseTranslate') {
  }

  return {};
};
