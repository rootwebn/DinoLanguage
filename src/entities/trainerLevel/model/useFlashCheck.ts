import { useState } from 'react';
import {
  useSetWordsStore,
  useWordsStore,
} from '@/entities/trainerLevel/model/storageZustand';
import {
  useSetStagesStorage,
  useStagesStorage,
} from '@/entities/trainerLevel/model/stagesStorage';
import * as z from 'zod';
import { UseFormResetField } from 'react-hook-form';
import {
  useSetStatsStorage,
  useStatsStorage,
} from '@/entities/trainerLevel/model/statsStorage';

export const useFlashCheck = () => {
  const words = useWordsStore((state) => state.words);
  const prioritizedWords = useWordsStore((state) => state.prioritizedWords);
  const translatedWordsRes = useWordsStore((state) => state.translatedWordsRes);

  const prioritizeWord = useSetWordsStore((state) => state.prioritizeWord);
  const loadWords = useSetWordsStore((state) => state.loadWords);
  const cleanStore = useSetWordsStore((state) => state.cleanStore);
  const setDataTranslation = useSetWordsStore(
    (state) => state.setDataTranslation,
  );
  const cleanStoreTranslation = useSetWordsStore(
    (state) => state.cleanStoreTranslation,
  );

  const score = useStatsStorage((state) => state.score);
  const numCorrectAnswers = useStatsStorage((state) => state.numCorrectAnswers);
  const scoreMultiplier = useStatsStorage((state) => state.scoreMultiplier);
  const statsLevel1 = useStatsStorage((state) => state.statsLevel1);

  const setStatsLevel1 = useSetStatsStorage((state) => state.setStatsLevel1);
  const setScore = useSetStatsStorage((state) => state.setScore);
  const setScoreMultiplier = useSetStatsStorage((state) => state.setMultiplier);
  const setNumCorrectAnswers = useSetStatsStorage(
    (state) => state.setNumCorrectAnswers,
  );

  const stageFlash = useStagesStorage((state) => state.stageFlash);
  const setStageFlash = useSetStagesStorage((state) => state.setStageFlash);

  const [wordIndex, setWordIndex] = useState(0);
  const [targetPrioritizedCount] = useState(6);

  const formSchema = z.object({
    answer: z
      .string()
      .min(2, { message: 'Answer is always at least 2 characters' })
      .max(15, { message: 'Answer is maximum 15 characters' }),
  });
  const handleResponsePickFlash = (knowsWord: boolean) => {
    if (!knowsWord) {
      prioritizeWord(words[wordIndex]);
    }

    if (wordIndex < words.length - 1) {
      setWordIndex((prevIndex) => prevIndex + 1);
    }

    if (
      wordIndex === words.length - 1 &&
      prioritizedWords.length < targetPrioritizedCount &&
      stageFlash === 1
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

  const onSubmitInput = (
    values: z.infer<typeof formSchema>,
    resetField: UseFormResetField<{ answer: string }>,
  ) => {
    if (values.answer === translatedWordsRes.translatedWords[wordIndex]) {
      setWordIndex((prevIndex) => prevIndex + 1);
      setNumCorrectAnswers(1);
      setScore(200);
      console.log('Answer is correct!');
      resetField('answer');
    } else {
      setNumCorrectAnswers(-1);
      setScore(-200);
      console.log('Answer is wrong!');
    }

    if (numCorrectAnswers === 1) {
      setScoreMultiplier(0.2);
    } else if (numCorrectAnswers === 3) {
      setScoreMultiplier(0.4);
    } else if (numCorrectAnswers === 7) {
      setScoreMultiplier(1.0);
    }

    if (prioritizedWords.length - 1 === wordIndex) {
      setStatsLevel1(score, scoreMultiplier, numCorrectAnswers);
      console.log('saved stats of level', statsLevel1);
      setStageFlash(5);
    }
    console.log(values);
  };

  return {
    wordIndex,
    words,
    score,
    prioritizedWords,
    translatedWordsRes,
    targetPrioritizedCount,
    numCorrectAnswers,
    stageFlash,
    scoreMultiplier,
    call: handleResponsePickFlash,
    handleUserMemo,
    handleListWords,
    onSubmitInput,
    cleanStore,
    cleanStoreTranslation,
    loadWords,
    setDataTranslation,
    formSchema,
  };
};

export default useFlashCheck;
