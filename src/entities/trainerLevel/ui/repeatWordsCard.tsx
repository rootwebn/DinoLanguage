import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';

export const RepeatWordsCard = () => {
  const {
    wordIndex,
    prioritizedWords,
    call: handlerUserMemo,
  } = useFlashCheck();
  return (
    <Card key={wordIndex}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <CardHeader>Okay! Let's repeat some words.</CardHeader>
      <CardContent>
        <div>
          <div className={'flex flex-col'}>
            Try to memorize these words:
            <div>
              <div>
                {prioritizedWords[wordIndex]} is {[wordIndex]}
              </div>
            </div>
          </div>
          <div className={'flex flex-row justify-center'}>
            <Button onClick={() => handlerUserMemo(true)} className={'mt-6'}>
              Next Word!
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
