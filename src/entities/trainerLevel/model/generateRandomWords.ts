import { wordList } from '@/entities/trainerLevel/model/wordsList';

const count = (min: number, max: number) => Math.random() * (max - min) + min;

export const generateRandomWords = () => {
  const indexSet = generateRandomIndexes(count(5, 13));
  const newWords: string[] = [];
  console.log('Generated indexes:', indexSet);
  for (let i = 0; i < indexSet.length; i++) {
    const index = indexSet[i];
    const element = wordList[index];
    newWords.push(element);
  }
  return newWords;
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
