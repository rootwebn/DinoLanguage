import { wordList } from '@/entities/trainerLevel/model/wordsList';

export const generateRandomIndex = (count: number) => {
  const indexSet: number[] = [];
  while (indexSet.length < count) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    if (!indexSet.includes(randomIndex)) {
      indexSet.push(randomIndex);
    }
  }
  return indexSet;
};
