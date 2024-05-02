'use client';

import { BoundStore } from '@/shared/helpers/boundStorage';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';

export const useFlashCheck = () => {
  const {
    words,
    prioritizedWords,
    wordIndex,
    stageFlash,
    stageBrain,
    loadWords,
    prioritizeWord,
    setStageFlash,
    setWordIndex,
    setExactWordIndex,
    setStageBrain,
  } = BoundStore();
  const { wordsGenMin, currentCustomList, userSelectLevel, userGameMode } =
    PersistBoundStore();

  const handleResponsePickFlash = (knowsWord: boolean) => {
    if (!knowsWord) {
      prioritizeWord(words[wordIndex]);
    }

    if (wordIndex < words.length - 1) {
      setWordIndex();
    }

    if (
      wordIndex === words.length - 1 &&
      prioritizedWords.length < wordsGenMin
    ) {
      setExactWordIndex(0);
      loadWords(5, 5);
    }

    if (userGameMode === 'flashcards') {
      if (prioritizedWords.length === wordsGenMin - 1) {
        setStageFlash(2);
      }
    }

    if (userGameMode === 'brainstorm') {
      if (prioritizedWords.length === wordsGenMin - 1) {
        setStageBrain(2);
      }
    }
  };

  const handleUserMemo = () => {
    if (
      userSelectLevel === 'customL' &&
      wordIndex < currentCustomList.listWords.length - 1
    ) {
      setWordIndex();
    } else if (wordIndex < prioritizedWords.length - 1) {
      setWordIndex();
    }

    if (userGameMode === 'brainstorm') {
      if (
        userSelectLevel === 'customL' &&
        wordIndex === currentCustomList.listWords.length - 1
      ) {
        setStageBrain(4);
      } else if (wordIndex === prioritizedWords.length - 1) {
        setStageBrain(4);
        setExactWordIndex(0);
      }
    }

    if (userGameMode === 'flashcards') {
      if (
        userSelectLevel === 'customL' &&
        wordIndex === currentCustomList.listWords.length - 1
      ) {
        setStageFlash(4);
      } else if (wordIndex === prioritizedWords.length - 1) {
        setStageFlash(4);
      }
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
