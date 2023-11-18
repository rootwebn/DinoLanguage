import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';

const RepeatWordsCard = () => {
  const {
    wordIndex,
    // wordsTranslate,
    words,
    call: handlerUserMemoResponse,
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
              <div>{/*{words[wordIndex]} is {wordsTranslate[wordIndex]}*/}</div>
            </div>
          </div>
          <div className={'flex flex-row justify-center'}>
            {/*<Button*/}
            {/*  onClick={() => handlerUserMemoResponse(true)}*/}
            {/*  className={'mt-6'}*/}
            {/*>*/}
            {/*  Next Word!*/}
            {/*</Button>*/}
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
