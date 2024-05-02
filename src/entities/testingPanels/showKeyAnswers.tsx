import { Card, CardContent } from '@/shared/ui';
import { BoundStore } from '@/shared/helpers/boundStorage';
import React from 'react';

interface keyInterface {
  classNameCard?: string;
}
export const ShowKeyAnswers: React.FC<keyInterface> = ({ classNameCard }) => {
  const { translatedWordsRes } = BoundStore();

  return (
    <Card className={`mt-4 bg-eclipseGray ${classNameCard}`}>
      <CardContent className={'pt-4'}>
        <div>
          Key to this test: {translatedWordsRes.translatedWords.join(', ')}
        </div>
      </CardContent>
    </Card>
  );
};
