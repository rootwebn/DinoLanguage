import { wordList } from '@/entities/trainerLevel/model/wordsList';
import { factsList } from '@/deprecated/factsList';

const count = (min: number, max: number) => Math.random() * (max - min) + min;

export const generateRandomWords = (countMin: number, countMax: number) => {
  const indexSet = generateRandomIndexes(count(countMin, countMax));
  const newWords: string[] = [];
  console.log('Generated indexes:', indexSet);
  for (let i = 0; i < indexSet.length; i++) {
    const index = indexSet[i];
    const element = wordList[index];
    newWords.push(element);
  }
  return newWords;
};

export const generateRandomFacts = () => {
  const indexSet = generateRandomIndexes(count(1, 1));
  const newFacts: string[] = [];
  for (let i = 0; i < indexSet.length; i++) {
    const index = indexSet[i];
    const element = factsList[index];
    newFacts.push(element);
  }
  return newFacts;
};

const generateRandomIndexes = (count: number) => {
  const indexSet: number[] = [];
  while (indexSet.length < count) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    if (!indexSet.includes(randomIndex)) {
      indexSet.push(randomIndex);
    }
  }
  return indexSet;
};
