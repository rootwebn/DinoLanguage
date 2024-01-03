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
import { useBoundStore } from '@/entities/trainerLevel/model/boundStorage';

export const useFlashCheck = () => {
  const words = useWordsStore((state) => state.words);
  const prioritizedWords = useWordsStore((state) => state.prioritizedWords);
  const translatedWordsRes = useWordsStore((state) => state.translatedWordsRes);

  const prioritizeWord = useSetWordsStore((state) => state.prioritizeWord);
  const loadWords = useSetWordsStore((state) => state.loadWords);
  const setDataTranslation = useSetWordsStore(
    (state) => state.setDataTranslation,
  );

  const {
    score,
    scoreMultiplier,
    streakAnswers,
    accuracyAnswers,
    rightAnswers,
    errorFormFlash,
    prioritizedWordsFull,
    setScore,
    setRightAnswers,
    setTotalNumAnswers,
    setAccuracyAnswers,
    setMultiplier,
    setPrioritizedWordsFull,
  } = useBoundStore();

  const stageFlash = useStagesStorage((state) => state.stageFlash);
  const setStageFlash = useSetStagesStorage((state) => state.setStageFlash);

  const [wordIndex, setWordIndex] = useState(0);
  const [targetPrioritizedCount] = useState(6);

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
      prioritizedWords.length < targetPrioritizedCount &&
      stageFlash === 1
    ) {
      setWordIndex(wordIndex - words.length + 1);
      loadWords();
    }

    if (prioritizedWords.length === targetPrioritizedCount - 1) {
      setPrioritizedWordsFull(true);
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
    errorFormFlash,
    wordIndex,
    words,
    score,
    prioritizedWords,
    translatedWordsRes,
    targetPrioritizedCount,
    streakAnswers,
    stageFlash,
    scoreMultiplier,
    call: handleResponsePickFlash,
    handleUserMemo,
    handleListWords,
    onSubmitInput,
    loadWords,
    setDataTranslation,
    formSchema,
  };
};

export default useFlashCheck;
