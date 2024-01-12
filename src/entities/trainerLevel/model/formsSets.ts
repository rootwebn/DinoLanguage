import * as z from 'zod';
import { useForm, UseFormResetField, UseFormSetError } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersistBoundStore } from '@/entities/trainerLevel/model/persistBoundStorage';
import { BoundStore } from '@/entities/trainerLevel/model/boundStorage';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';

export const FormsSets = () => {
  const {
    setDifficultGame,
    setPeacefulMode,
    setWordsGenLimit,
    setTimeOnStage,
    setTargetLanguage,
    difficultGame,
    wordsGenMin,
    peacefulMode,
    timeOnStage,
    targetLanguage,
  } = PersistBoundStore();
  const {
    prioritizedWords,
    wordIndex,
    words,
    translatedWordsRes,
    rightAnswersRow,
    setRightAnswersRow,
    setMultiplier,
    setStageFlash,
    setTotalAnswers,
    setScore,
    setRightAnswers,
    setAccuracyAnswers,
  } = BoundStore();
  const { setWordIndex } = useFlashCheck();

  const configFormSchema = z
    .object({
      wordsMemo: z
        .number()
        .min(1, 'Write smt')
        .max(23, "Can't be more than 23 words to memo"),
      time: z
        .number()
        .min(10, 'minimal time is 10 seconds')
        .max(60, 'max time is 60 seconds')
        .positive()
        .int(),
      difficult: z
        .number()
        .min(1, 'minimal difficult is A1')
        .max(6, 'max difficult is C2'),
      peacefulMode: z.boolean().default(false),
    })
    .required();

  const formFlashSchema = z.object({
    answer: z
      .string()
      .min(1, { message: "Answer field can't being empty" })
      .max(20, { message: 'Answer is maximum 20 characters' }),
  });

  const formCustomListSchema = z.object({
    customWord: z
      .string()
      .min(2, { message: 'Word must contain at least 2 letters!' })
      .max(17, {
        message: "Word can't being more than 17 letters. Not in this universe.",
      }),
    customDefinition: z
      .string()
      .min(2, { message: 'Definition must contain at least 2 letters!' })
      .max(17, {
        message:
          "Definition can't being more than 17 letters. Not in this universe.",
      }),
    targetLanguage: z.string({ required_error: 'Select a target language.' }),
  });

  const onSubmit = (value: z.infer<typeof configFormSchema>) => {
    setPeacefulMode(value.peacefulMode);
    setDifficultGame(value.difficult);
    setWordsGenLimit(value.wordsMemo);
    setTimeOnStage(value.time);
  };

  const onSubmitInput = (
    values: z.infer<typeof formFlashSchema>,
    resetField: UseFormResetField<{ answer: string }>,
    setError: UseFormSetError<{ answer: string }>,
  ) => {
    if (values.answer === translatedWordsRes.translatedWords[wordIndex]) {
      setWordIndex();
      setScore(200);
      setRightAnswers();
      setRightAnswersRow(false);
      setTotalAnswers();
      setAccuracyAnswers();
      resetField('answer');
    } else {
      setAccuracyAnswers();
      setRightAnswersRow(true);
      setScore(-200);
      setTotalAnswers();
      setError('answer', { type: 'custom', message: 'Wrong Answer!' });
    }

    if (rightAnswersRow === 1) {
      console.log('func setMultiplier called');
      setMultiplier(0.2);
    } else if (rightAnswersRow === 3) {
      console.log('func setMultiplier called');
      setMultiplier(0.3);
    } else if (rightAnswersRow === 6) {
      console.log('func setMultiplier called');
      setMultiplier(0.5);
    } else if (rightAnswersRow === 0) {
      setMultiplier(0);
    }

    if (prioritizedWords.length - 1 === wordIndex) {
      setStageFlash(5);
    }
    console.log(values);
  };

  const onSubmitCustomList = (value: z.infer<typeof formCustomListSchema>) => {
    words.push(value.customWord);
    translatedWordsRes.translatedWords.push(value.customDefinition);
    setTargetLanguage(value.targetLanguage);
  };

  const customListForm = useForm<z.infer<typeof formCustomListSchema>>({
    resolver: zodResolver(formCustomListSchema),
    defaultValues: {
      customWord: '',
      customDefinition: '',
      targetLanguage: '',
    },
  });

  const configForm = useForm<z.infer<typeof configFormSchema>>({
    resolver: zodResolver(configFormSchema),
    defaultValues: {
      wordsMemo: wordsGenMin,
      time: timeOnStage,
      difficult: 2,
      peacefulMode: peacefulMode,
    },
  });

  const formFlash = useForm<z.infer<typeof formFlashSchema>>({
    resolver: zodResolver(formFlashSchema),
    defaultValues: {
      answer: '',
    },
  });

  return {
    onSubmit,
    onSubmitInput,
    onSubmitCustomList,
    configForm,
    customListForm,
    formFlash,
    formFlashSchema,
    formCustomListSchema,
  };
};
