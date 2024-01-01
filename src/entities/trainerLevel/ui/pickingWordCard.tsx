import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import React, { useEffect } from 'react';
import { useFlashCheck } from '@/entities/trainerLevel/model/';
import { useBoundStore } from '@/entities/trainerLevel/model/boundStorage';
import { useSaveContext } from '@/entities/trainerLevel/model/useSaveContext';
//TODO: Rewrite storageZustand, rework UI flashcards and complete system of flashcards
// rewrite useFlashCheck, make survey before training, use google API for translating words

export const PickingWordCard = () => {
  const {
    wordIndex,
    call: handleResponsePickFlash,
    words,
    loadWords,
    prioritizedWords,
  } = useFlashCheck();

  const statsLevel1Flash = useSaveContext((s) => s.statsLevel1Flash);
  const setNewStats = useSaveContext((s) => s.setNewStats);
  console.log('Stats of level 1', statsLevel1Flash);

  useEffect(() => {
    loadWords();
  }, []);

  // console.log('Array of Words:', words);
  console.log('Array of Prioritized Words:', prioritizedWords);
  // console.log('Current Word Index:', wordIndex);
  return (
    <Card key={wordIndex} className={'flex flex-col justify-around'}>
      <CardHeader className={'text-center text-2xl'}>
        Did you know this word?
      </CardHeader>
      <CardContent>
        <div className={'flex flex-col'}>
          <div
            className={
              'mb-6 mt-12 flex items-center justify-center gap-4 text-4xl text-muted-foreground'
            }
          >
            <div>{words[wordIndex]}</div>
          </div>
          <div className={'flex flex-row justify-between'}>
            <Button
              onClick={() => handleResponsePickFlash(true)}
              className={'ml-8 mt-8 pb-6 pl-8 pr-8 pt-6 text-lg'}
              variant={'outline'}
            >
              Yes
            </Button>
            <Button
              onClick={() => handleResponsePickFlash(false)}
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
