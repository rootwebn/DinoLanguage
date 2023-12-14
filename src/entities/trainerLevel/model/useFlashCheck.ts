import { useEffect, useState } from 'react';
import {
  useSetWordsStore,
  useWordsStore,
} from '@/entities/trainerLevel/model/storageZustand';
import {
  useSetStagesStorage,
  useStagesStorage,
} from '@/entities/trainerLevel/model/stagesStorage';
import { useSetStatsStorage } from '@/entities/trainerLevel/model/statsStorage';

export const useFlashCheck = () => {
  const words = useWordsStore((state) => state.words);
  const prioritizedWords = useWordsStore((state) => state.prioritizedWords);
  const translatedTextStorage = useWordsStore(
    (state) => state.translatedTextStorage,
  );

  const prioritizeWord = useSetWordsStore((state) => state.prioritizeWord);
  const loadWords = useSetWordsStore((state) => state.loadWords);
  const cleanStore = useSetWordsStore((state) => state.cleanStore);
  const setTranslatedText = useSetWordsStore(
    (state) => state.setDataTranslation,
  );
  const cleanStoreTranslation = useSetWordsStore(
    (state) => state.cleanStoreTranslation,
  );

  const stageFlash = useStagesStorage((state) => state.stageFlash);

  const setStageFlash = useSetStagesStorage((state) => state.setStageFlash);

  const [wordIndex, setWordIndex] = useState(0);
  const [targetPrioritizedCount] = useState(6);

  const handleResponsePickFlash = (knowsWord: boolean) => {
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

    if (prioritizedWords.length === targetPrioritizedCount - 1) {
      setStageFlash(2);
    }
  };

  const handleListWords = () => {
    setStageFlash(3);
  };

  const handleUserMemo = () => {
    if (wordIndex < prioritizedWords.length - 1) {
      setWordIndex((prevState) => prevState + 1);
    }

    if (wordIndex === prioritizedWords.length - 1) {
      setStageFlash(4);
    }
  };

  useEffect(() => {
    loadWords();
  }, [loadWords]);

  useEffect(() => {
    if (prioritizedWords.length === targetPrioritizedCount - 1) {
      cleanStoreTranslation();
      console.log('Storage Translation Cleared!');
    }
  }, []);

  return {
    wordIndex,
    targetPrioritizedCount,
    stageFlash,
    call: handleResponsePickFlash,
    cleanStore,
    handleUserMemo,
    handleListWords,
    translatedTextStorage,
    setTranslatedText,
    cleanStoreTranslation,
    words,
    prioritizedWords,
  };
};

export default useFlashCheck;
