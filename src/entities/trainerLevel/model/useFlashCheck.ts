import { useState } from 'react';
import {
  useSetWordsStore,
  useWordsStore,
} from '@/entities/trainerLevel/model/storageZustand';

export const useFlashCheck = () => {
  const words = useWordsStore((state) => state.words);
  const loadWords = useSetWordsStore((state) => state.loadWords);
  const [wordIndex, setWordIndex] = useState(0);
  // const [targetPrioritizedCount] = useState(5);

  const handleUserResponse = (knowsWord: boolean) => {
    // if (!knowsWord) {
    //   prioritizeWord(words[wordIndex]);
    //   prioritizeWordTranslated(wordsTranslate[wordIndex]);
    // }

    if (wordIndex < words.length - 1) {
      setWordIndex((prevIndex) => prevIndex + 1);
    }

    if (wordIndex === words.length - 1) {
      setWordIndex(wordIndex - words.length + 1);
      loadWords();
    }
  };

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
  //   loadWords();
  // }, [loadWords]);

  // useEffect(() => {
  //   loadWordsTranslated();
  // }, [loadWordsTranslated]);
  //
  // useEffect(() => {
  //   const navigation = window.performance.getEntriesByType('navigation')[0];
  //   if (navigation && 'type' in navigation && navigation.type === 'load') {
  //     useWordsStore.persist.clearStorage();
  //   }
  // });

  return {
    wordIndex,
    // targetPrioritizedCount,
    call: handleUserResponse,
    words,
    // prioritizedWords,
    // wordsTranslate,
    // prioritizedWordsTranslated,
  };
};

export default useFlashCheck;
