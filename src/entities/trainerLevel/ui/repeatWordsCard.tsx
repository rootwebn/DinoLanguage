import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';

export const RepeatWordsCard = () => {
  const { wordIndex, prioritizedWords, translatedTextStorage, handleUserMemo } =
    useFlashCheck();

  console.log('Current word index', wordIndex);
  console.log('length array pWords', prioritizedWords.length);

  return (
    <Card>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <CardHeader>Okay! Let's memorize some words.</CardHeader>
      <CardContent>
        <div>
          <div className={'flex flex-col'}>
            Try to memorize these words:
            <div>
              <div>
                {prioritizedWords[wordIndex]} is{' '}
                {translatedTextStorage.translatedText[wordIndex]}
              </div>
            </div>
          </div>
          <div className={'flex flex-row justify-center'}>
            <Button onClick={handleUserMemo} className={'mt-6'}>
              Memorized. Next!
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
