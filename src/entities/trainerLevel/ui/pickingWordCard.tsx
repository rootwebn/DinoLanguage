import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import React from 'react';
import { useFlashCheck } from '@/entities/trainerLevel/model/';
import { useWordsStore } from '@/entities/trainerLevel/model/storageZustand';
//TODO: Rewrite storageZustand, rework UI flashcards and complete system of flashcards
// rewrite useFlashCheck, make survey before training, use google API for translating words

export const PickingWordCard = () => {
  // const words = useWordsStore((state) => state.words);
  // const prioritizedWords = useWordsStore((state) => state.prioritizedWords);
  const {
    wordIndex,
    call: handleUserResponse,
    words,
    prioritizedWords,
  } = useFlashCheck();

  console.log('Array of Words:', words);
  // console.log('Array of Translated Words:', wordsTranslate);
  console.log('Array of Prioritized Words:', prioritizedWords);
  console.log('Current Word Index:', wordIndex);
  return (
    <Card
      key={wordIndex}
      className={'flex min-h-[30rem] min-w-[40rem] flex-col justify-around'}
    >
      <CardHeader className={'text-center text-2xl'}>
        Did you know this word?
      </CardHeader>
      <CardContent>
        <div className={'flex flex-col'}>
          <div
            className={
              'mb-6 flex justify-center text-4xl text-muted-foreground'
            }
          >
            {words[wordIndex]}
          </div>
          <div className={'flex flex-row justify-between '}>
            <Button
              onClick={() => handleUserResponse(true)}
              className={'ml-8 mt-8 pb-6 pl-8 pr-8 pt-6 text-lg'}
              variant={'outline'}
            >
              Yes
            </Button>
            <Button
              onClick={() => handleUserResponse(false)}
              className={'mr-8 mt-8 pb-6 pl-8 pr-8 pt-6 text-lg'}
              variant={'outline'}
            >
              No
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className={'text-lg text-muted-foreground'}>
        DinoLanguage 2023
      </CardFooter>
    </Card>
  );
};
