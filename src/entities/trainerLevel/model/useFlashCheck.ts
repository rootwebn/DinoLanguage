import { useEffect, useState } from 'react';
import {
  useSetWordsStore,
  useWordsStore,
} from '@/entities/trainerLevel/model/storageZustand';

export const useFlashCheck = () => {
  const words = useWordsStore((state) => state.words);
  const prioritizedWords = useWordsStore((state) => state.prioritizedWords);
  const prioritizeWord = useSetWordsStore((state) => state.prioritizeWord);
  const loadWords = useSetWordsStore((state) => state.loadWords);
  const cleanStore = useSetWordsStore((state) => state.cleanStore);
  const translatedText = useWordsStore((state) => state.translatedText);
  const setTranslatedText = useSetWordsStore(
    (state) => state.setDataTranslation,
  );
  const cleanStoreTranslation = useSetWordsStore(
    (state) => state.cleanStoreTranslation,
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [indexStage, setIndexStage] = useState(0);
  const [targetPrioritizedCount] = useState(6);

  const handleUserResponse = (knowsWord: boolean) => {
    if (!knowsWord) {
      prioritizeWord(words[wordIndex]);
    }

    if (wordIndex < words.length - 1) {
      setWordIndex((prevIndex) => prevIndex + 1);
    }

    if (
      wordIndex === words.length - 1 &&
      prioritizedWords.length < targetPrioritizedCount
    ) {
      setWordIndex(wordIndex - words.length + 1);
      loadWords();
    }
  };

  const handleUserMemo = (knowsWord: boolean) => {
    if (knowsWord) {
      setWordIndex((prevIndex) => prevIndex + 1);
    }

    if (wordIndex === words.length - 1) {
      setWordIndex(wordIndex - words.length + 1);
    }
  };

  const listPrioritizedWordsHandle = () => {
    setIndexStage(2);
  };

  useEffect(() => {
    loadWords();
  }, [loadWords]);

  useEffect(() => {
    if (prioritizedWords.length === targetPrioritizedCount - 1) {
      setIndexStage(1);
      cleanStoreTranslation();
      console.log('Storage Translation Cleared!');
    }
  }, [
    prioritizedWords,
    targetPrioritizedCount,
    setIndexStage,
    cleanStoreTranslation,
  ]);

  return {
    wordIndex,
    targetPrioritizedCount,
    indexStage,
    setIndexStage,
    call: handleUserResponse,
    listPrioritizedWordsHandle,
    cleanStore,
    handleUserMemo,
    translatedText,
    setTranslatedText,
    cleanStoreTranslation,
    words,
    prioritizedWords,
  };
};

export default useFlashCheck;
