import * as z from 'zod';
import {
  useFieldArray,
  useForm,
  UseFormResetField,
  UseFormSetError,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BoundStore } from '@/shared/helpers/boundStorage';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';

export const FormsSets = () => {
  const {
    setDifficultGame,
    setPeacefulMode,
    setWordsGenLimit,
    setTimeOnStage,
    setTargetLanguage,
    setCustomList,
    wordsGenMin,
    peacefulMode,
    timeOnStage,
    targetLanguage,
  } = PersistBoundStore();
  const {
    prioritizedWords,
    wordIndex,
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

  const configFormSchema = z.object({
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
    targetLanguage: z.string({ required_error: 'Select a target language.' }),
  });

  const formFlashSchema = z.object({
    answer: z
      .string()
      .min(1, { message: "Answer field can't being empty" })
      .max(20, { message: 'Answer is maximum 20 characters' }),
  });

  const formLabSchema = z.object({
    wordRequest: z.string().min(1).max(20),
  });

  const formCustomListSchema = z.object({
    listName: z.string().min(4).max(35),
    descList: z.string().min(4).max(120),
    wordCustom: z.string().min(1).max(20),
    definitionCustom: z.string().min(1).max(20),
  });

  const onSubmit = (value: z.infer<typeof configFormSchema>) => {
    setPeacefulMode(value.peacefulMode);
    setDifficultGame(value.difficult);
    setWordsGenLimit(value.wordsMemo);
    setTimeOnStage(value.time);
    setTargetLanguage(value.targetLanguage);
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

  const onSubmitCustomList = (values: z.infer<typeof formCustomListSchema>) => {
    console.log('worked.');
    const listWords = [''];
    const listDefinition = [''];
    listWords.push(values.wordCustom);
    listDefinition.push(values.definitionCustom);
    console.log('pushing things done', listWords, listDefinition);
    const dataList = {
      listTitle: values.listName,
      listDesc: values.descList,
      listWords: listWords,
      listDefinition: listDefinition,
    };
    console.log('custom save sys worked', dataList);
    setCustomList(dataList);
  };

  const configForm = useForm<z.infer<typeof configFormSchema>>({
    resolver: zodResolver(configFormSchema),
    defaultValues: {
      wordsMemo: wordsGenMin,
      time: timeOnStage,
      difficult: 2,
      peacefulMode: peacefulMode,
      targetLanguage: targetLanguage,
    },
    э,
  });

  const formFlash = useForm<z.infer<typeof formFlashSchema>>({
    resolver: zodResolver(formFlashSchema),
    defaultValues: {
      answer: '',
    },
  });

  const formLab = useForm<z.infer<typeof formLabSchema>>({
    resolver: zodResolver(formLabSchema),
    defaultValues: {
      wordRequest: '',
    },
  });

  return {
    onSubmit,
    onSubmitInput,
    onSubmitCustomList,
    configForm,
    formFlash,
    formLab,
    formFlashSchema,
    formLabSchema,
    formCustomListSchema,
  };
};
