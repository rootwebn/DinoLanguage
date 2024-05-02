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
import { toast } from 'sonner';

export const FormsSets = () => {
  const {
    setPeacefulMode,
    setWordsGenLimit,
    setTimeOnStage,
    setTargetLanguage,
    setCustomList,
    setUserName,
    wordsGenMin,
    peacefulMode,
    timeOnStage,
    targetLanguage,
    userName,
    customList,
    currentCustomList,
    userSelectLevel,
  } = PersistBoundStore();
  const {
    prioritizedWords,
    wordIndex,
    translatedWordsRes,
    rightAnswersRow,
    gameChallenge,
    setWordPriority,
    setExactWordIndex,
    setGameChallenge,
    setRightAnswersRow,
    setMultiplier,
    setStageFlash,
    setTotalAnswers,
    setScore,
    setRightAnswers,
    setAccuracyAnswers,
  } = BoundStore();
  const { setWordIndex } = useFlashCheck();

  const setCorrectAnswer = () => {
    setWordIndex();
    setScore(200);
    setRightAnswers();
    setRightAnswersRow(false);
    setTotalAnswers();
    setAccuracyAnswers();
  };

  const setFalseAnswer = () => {
    setAccuracyAnswers();
    setRightAnswersRow(true);
    setScore(-200);
    setTotalAnswers();
  };

  const configFormSchema = z.object({
    userName: z
      .string()
      .min(4, 'too small name, no zxc')
      .max(12, 'too big name'),
    wordsMemo: z
      .number()
      .min(1, 'Write smt')
      .max(50, "Can't be more than 50 words to memo"),
    time: z
      .number()
      .min(10, 'minimal time is 10 seconds')
      .max(60, 'max time is 60 seconds')
      .positive()
      .int(),
    peacefulMode: z.boolean().default(false),
    targetLanguage: z.string({ required_error: 'Select a target language.' }),
  });

  const brainstormGameScheme = z.object({
    userAnswer: z.string().min(2, 'too small name, no zxc').max(15, 'too big'),
    userAnswerFalseTranslation: z.enum(['true', 'false-1', 'false-2'], {
      required_error: 'You need to select a notification type.',
    }),
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
    listDesc: z.string().min(4).max(120),
    listWords: z.array(
      z.object({
        customWord: z.string(),
        customDef: z.string(),
      }),
    ),
  });

  const brainstormOnSubmit = (
    value: z.infer<typeof brainstormGameScheme>,
    resetField: UseFormResetField<{
      userAnswer: string;
      userAnswerFalseTranslation: string;
    }>,
    setError: UseFormSetError<{
      userAnswer: string;
      userAnswerFalseTranslation: string;
    }>,
  ) => {
    console.log('submit handler worked');

    switch (gameChallenge) {
      case 'reverseTranslate':
        if (prioritizedWords[wordIndex] === value.userAnswer) {
          setCorrectAnswer();
          setGameChallenge('missingLetters');
          setWordPriority(2);
          setWordIndex();
          resetField('userAnswer');
        } else {
          setFalseAnswer();
          setError('userAnswer', { type: 'custom', message: 'Wrong Error!' });
          setWordPriority(3);
          setWordIndex();
        }
        break;
      case 'translate':
        console.log('worked');
        if (
          value.userAnswer === translatedWordsRes?.translatedWords[wordIndex]
        ) {
          setGameChallenge('falseTranslate');
          setWordPriority(2);
          setWordIndex();
          setCorrectAnswer();
          resetField('userAnswer');
        } else {
          setFalseAnswer();
          setError('userAnswer', { type: 'custom', message: 'Wrong Error!' });
          setWordPriority(3);
          setWordIndex();
        }
        break;
      case 'falseTranslate':
        toast.message('worked');
        if (
          value.userAnswerFalseTranslation === 'false-1' ||
          value.userAnswerFalseTranslation === 'false-2'
        ) {
          setFalseAnswer();
          setError('userAnswer', { type: 'custom', message: 'Wrong Error!' });
          setWordPriority(3);
          setWordIndex();
        } else {
          setGameChallenge('translate');
          setWordPriority(2);
          setWordIndex();
          setCorrectAnswer();
          resetField('userAnswer');
          break;
        }

        if (wordIndex === prioritizedWords.length + 1) {
          setExactWordIndex(0);
        }
    }
  };
  const brainstormForm = useForm<z.infer<typeof brainstormGameScheme>>({
    resolver: zodResolver(brainstormGameScheme),
    defaultValues: {
      userAnswer: '',
    },
  });

  const onSubmit = (value: z.infer<typeof configFormSchema>) => {
    setPeacefulMode(value.peacefulMode);
    setWordsGenLimit(value.wordsMemo);
    setTimeOnStage(value.time);
    setTargetLanguage(value.targetLanguage);
    setUserName(value.userName);
  };

  const onSubmitInput = (
    values: z.infer<typeof formFlashSchema>,
    resetField: UseFormResetField<{ answer: string }>,
    setError: UseFormSetError<{ answer: string }>,
  ) => {
    // if (
    //   userSelectLevel === 'customL' &&
    //   values.answer === currentCustomList.listWords[wordIndex].customDef
    // ) {
    //   setCorrectAnswer();
    //   resetField('answer');
    // } else {
    //   setFalseAnswer();
    //   setError('answer', { type: 'custom', message: 'Wrong Answer!' });
    // }

    if (
      userSelectLevel !== 'customL' &&
      values.answer === translatedWordsRes.translatedWords[wordIndex]
    ) {
      setCorrectAnswer();
      resetField('answer');
    } else {
      setFalseAnswer();
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

    if (
      userSelectLevel === 'customL' &&
      currentCustomList.listWords.length - 1 === wordIndex
    ) {
      setStageFlash(5);
    } else if (prioritizedWords.length - 1 === wordIndex) {
      setStageFlash(5);
    }

    console.log(values);
  };

  const checkSameNameList = (values: z.infer<typeof formCustomListSchema>) => {
    let sameTitleList = 0;
    let idCustomList = 0;

    for (let i = 0; i < customList.length; i++) {
      if (values.listName === customList[i].listTitle) {
        sameTitleList += 1;
      }
      if (customList[i].listId) {
        idCustomList = customList[i].listId;
      }
    }
    return { sameTitleList, idCustomList };
  };

  const onSubmitCustomList = (
    values: z.infer<typeof formCustomListSchema>,
    setError: UseFormSetError<{ listName: string }>,
  ) => {
    const sameTitleList = checkSameNameList(values).sameTitleList;
    const idCustomList = checkSameNameList(values).idCustomList;
    const dataList = {
      listTitle: values.listName,
      listDesc: values.listDesc,
      listWords: values.listWords,
      listId: idCustomList + 1,
    };

    // toast('is it worked?');
    if (sameTitleList > 0) {
      setError('listName', {
        type: 'custom',
        message: 'This list name is already used!',
      });
    } else {
      setCustomList(dataList);
    }
  };

  const configForm = useForm<z.infer<typeof configFormSchema>>({
    resolver: zodResolver(configFormSchema),
    defaultValues: {
      wordsMemo: wordsGenMin,
      time: timeOnStage,
      peacefulMode: peacefulMode,
      targetLanguage: targetLanguage,
      userName: userName,
    },
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

  const formCustomList = useForm<z.infer<typeof formCustomListSchema>>({
    resolver: zodResolver(formCustomListSchema),
    defaultValues: {
      listName: '',
      listDesc: '',
      listWords: [
        {
          customWord: '',
          customDef: '',
        },
      ],
    },
  });

  const formCustomArray = useFieldArray({
    control: formCustomList.control,
    name: 'listWords',
  });

  return {
    onSubmit,
    onSubmitInput,
    onSubmitCustomList,
    brainstormOnSubmit,
    configForm,
    brainstormForm,
    formFlash,
    formLab,
    formFlashSchema,
    formLabSchema,
    formCustomList,
    formCustomArray,
    formCustomListSchema,
  };
};
