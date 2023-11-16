'use client';

import { useCallback, useEffect, useState } from 'react';
import { useWordsStore } from '@/entities/trainerLevel/model/storageZustand';

export const useFlashCheck = () => {
  const {
    words,
    wordsTranslate,
    loadWords,
    loadWordsTranslated,
    prioritizeWord,
    prioritizeWordTranslated,
    prioritizedWords,
    prioritizedWordsTranslated,
  } = useWordsStore();
  const [wordIndex, setWordIndex] = useState(0);
  const [targetPrioritizedCount] = useState(5);

  const memoizedLoadWords = useCallback(() => {
    loadWords();
  }, [loadWords]);

  const memoizedLoadWordsTranslate = useCallback(() => {
    loadWordsTranslated();
  }, [loadWordsTranslated]);

  const handleUserResponse = (knowsWord: boolean) => {
    if (!knowsWord) {
      prioritizeWord(words[wordIndex]);
      prioritizeWordTranslated(wordsTranslate[wordIndex]);
    }

    if (wordIndex < words.length - 1) {
      setWordIndex((prevIndex) => prevIndex + 1);
    }

    if (wordIndex === words.length - 1) {
      setWordIndex(wordIndex - words.length + 1);
    }

    if (
      prioritizedWords.length < targetPrioritizedCount &&
      wordIndex === words.length - 1
    ) {
      memoizedLoadWords();
    }
  };

  const handlerUserMemoResponse = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex((prevIndex) => prevIndex + 1);
    }

    if (wordIndex === words.length - 1) {
      setWordIndex(wordIndex - words.length + 1);
    }
  };

  useEffect(() => {
    memoizedLoadWords();
  }, [memoizedLoadWords]);

  useEffect(() => {
    memoizedLoadWordsTranslate();
  }, [memoizedLoadWordsTranslate]);

  return {
    wordIndex,
    targetPrioritizedCount,
    call: handleUserResponse,
    handlerUserMemoResponse,
    words,
    prioritizedWords,
    wordsTranslate,
    prioritizedWordsTranslated,
  };
};

export default useFlashCheck;
