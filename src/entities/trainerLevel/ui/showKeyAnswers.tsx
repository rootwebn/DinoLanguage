import { Card, CardContent } from '@/shared/ui';
import { BoundStore } from '@/entities/trainerLevel/model/boundStorage';

export const ShowKeyAnswers = () => {
  const { translatedWordsRes } = BoundStore();

  return (
    <Card className={'mt-4 bg-eclipseGray'}>
      <CardContent className={'pt-4'}>
        <div>
          Key to this test: {translatedWordsRes.translatedWords.join(', ')}
        </div>
      </CardContent>
    </Card>
  );
};
