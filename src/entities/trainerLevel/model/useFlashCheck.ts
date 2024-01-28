'use client';

import { BoundStore } from '@/shared/helpers/boundStorage';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';

export const useFlashCheck = () => {
  const {
    words,
    prioritizedWords,
    wordIndex,
    stageFlash,
    loadWords,
    prioritizeWord,
    setStageFlash,
    setWordIndex,
    setExactWordIndex,
  } = BoundStore();
  const { wordsGenMin } = PersistBoundStore();

  const handleResponsePickFlash = (knowsWord: boolean) => {
    if (!knowsWord) {
      prioritizeWord(words[wordIndex]);
    }

    if (wordIndex < words.length - 1) {
      setWordIndex();
    }

    if (
      wordIndex === words.length - 1 &&
      prioritizedWords.length < wordsGenMin &&
      stageFlash === 1
    ) {
      setExactWordIndex(0);
      loadWords(5, 5);
    }

    if (prioritizedWords.length === wordsGenMin - 1) {
      setStageFlash(2);
    }
  };

  const handleUserMemo = () => {
    if (wordIndex < prioritizedWords.length - 1) {
      setWordIndex();
    }

    if (wordIndex === prioritizedWords.length - 1) {
      setStageFlash(4);
    }
  };

  return {
    call: handleResponsePickFlash,
    handleUserMemo,
    setWordIndex,
    loadWords,
  };
};

export default useFlashCheck;
