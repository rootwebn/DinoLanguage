import { Card, CardContent } from '@/shared/ui';
import { useWordsStore } from '@/entities/trainerLevel/model/wordsStorage';

export const ShowKeyAnswers = () => {
  const keyAnswers = useWordsStore((state) => state.translatedWordsRes);

  return (
    <Card className={'mt-4'}>
      <CardContent className={'pt-4'}>
        <div>Key to this test: {keyAnswers.translatedWords.join(', ')}</div>
      </CardContent>
    </Card>
  );
};
