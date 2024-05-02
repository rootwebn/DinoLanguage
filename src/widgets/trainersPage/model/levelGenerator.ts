import { BoundStore } from '@/shared/helpers/boundStorage';

export const useBrainstormGame = () => {
  const {
    stageFlash,
    setAnswerScore,
    setWordPriority,
    setGameChallenge,
    wordPriority,
    answerScore,
    gameChallenge,
  } = BoundStore();

  const isFailedWord = () => {};

  return {};
};
