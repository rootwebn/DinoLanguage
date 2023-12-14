import { Card, CardContent, CardFooter, CardHeader, Input } from '@/shared/ui';
import { useFlashCheck } from '@/entities/trainerLevel/model';

export const CheckKnowWords = () => {
  const { prioritizedWords, wordIndex } = useFlashCheck();
  return (
    <Card>
      <CardHeader className={'flex flex-row'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Okay! Let's check how&nbsp;<div className={'font-bold'}>{'good'}</div>
        &nbsp;you know these words.
      </CardHeader>
      <CardContent>
        <div>How to translate word {prioritizedWords[wordIndex]}?</div>
        <Input type={''} placeholder={'Write your answer here...'} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
