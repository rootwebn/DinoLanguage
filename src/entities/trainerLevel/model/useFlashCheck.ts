'use client';

import { useState } from 'react';
import {
  useSetWordsStore,
  useWordsStore,
} from '@/entities/trainerLevel/model/wordsStorage';
import {
  useSetStagesStorage,
  useStagesStorage,
} from '@/entities/trainerLevel/model/stagesStorage';
import * as z from 'zod';
import { UseFormResetField, UseFormSetError } from 'react-hook-form';
import { BoundStore } from '@/entities/trainerLevel/model/boundStorage';
import { useConfigContext } from '@/entities/trainerLevel/model/useConfigContext';

export const useFlashCheck = () => {
  const words = useWordsStore((s) => s.words);
  const prioritizedWords = useWordsStore((s) => s.prioritizedWords);
  const translatedWordsRes = useWordsStore((s) => s.translatedWordsRes);

  const prioritizeWord = useSetWordsStore((s) => s.prioritizeWord);
  const loadWords = useSetWordsStore((s) => s.loadWords);
  const setDataTranslation = useSetWordsStore(
    (state) => state.setDataTranslation,
  );

  const {
    accuracyAnswers,
    rightAnswers,
    setScore,
    setRightAnswers,
    setTotalNumAnswers,
    setAccuracyAnswers,
    setMultiplier,
  } = BoundStore();

  const stageFlash = useStagesStorage((s) => s.stageFlash);
  const setStageFlash = useSetStagesStorage((s) => s.setStageFlash);
  const wordsGenMin = useConfigContext((s) => s.wordsGenMin);
  const [wordIndex, setWordIndex] = useState(0);

  const formSchema = z.object({
    answer: z
      .string()
      .min(1, { message: "Answer field can't being empty" })
      .max(20, { message: 'Answer is maximum 20 characters' }),
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
      prioritizedWords.length < wordsGenMin &&
      stageFlash === 1
    ) {
      setWordIndex(wordIndex - words.length + 1);
      loadWords(5, 5);
    }

    if (prioritizedWords.length === wordsGenMin - 1) {
      setStageFlash(2);
    }
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
    setError: UseFormSetError<{ answer: string }>,
  ) => {
    if (values.answer === translatedWordsRes.translatedWords[wordIndex]) {
      setAccuracyAnswers();
      setWordIndex((prevIndex) => prevIndex + 1);
      setScore(200);
      setRightAnswers();
      setTotalNumAnswers();
      resetField('answer');
      console.log('accuracy right', accuracyAnswers);
    } else {
      setAccuracyAnswers();
      console.log('accuracy wrong', accuracyAnswers);
      setError('answer', { type: 'custom', message: 'Wrong Answer!' });
      setScore(-200);
      setTotalNumAnswers();
    }

    if (rightAnswers === 1) {
      console.log('setMultiplier');
      setMultiplier(0.2);
    } else if (rightAnswers === 3) {
      setMultiplier(0.4);
    } else if (rightAnswers === 7) {
      setMultiplier(1.0);
    }

    if (prioritizedWords.length - 1 === wordIndex) {
      setStageFlash(5);
    }
    console.log(values);
  };

  return {
    wordIndex,
    words,
    prioritizedWords,
    translatedWordsRes,
    stageFlash,
    formSchema,
    call: handleResponsePickFlash,
    handleUserMemo,
    onSubmitInput,
    loadWords,
    setDataTranslation,
  };
};

export default useFlashCheck;
