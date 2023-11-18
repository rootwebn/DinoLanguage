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
  const [wordIndex, setWordIndex] = useState(0);
  const [targetPrioritizedCount] = useState(5);

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
      cleanStore();
      loadWords();
    }
  };

  useEffect(() => {
    cleanStore();
    loadWords();
  }, [loadWords, cleanStore]);

  // const handlerUserMemoResponse = () => {
  //   if (wordIndex < words.length - 1) {
  //     setWordIndex((prevIndex) => prevIndex + 1);
  //   }
  //
  //   if (wordIndex === words.length - 1) {
  //     setWordIndex(wordIndex - words.length + 1);
  //   }
  // };

  // useEffect(() => {
  return {
    wordIndex,
    targetPrioritizedCount,
    call: handleUserResponse,
    words,
    prioritizedWords,
    // wordsTranslate,
    // prioritizedWordsTranslated,
  };
};

export default useFlashCheck;
