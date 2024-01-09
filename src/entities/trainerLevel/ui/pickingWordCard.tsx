'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useEffect } from 'react';
import { useFlashCheck } from '@/entities/trainerLevel/model/';
import Image from 'next/image';
import LoadingGif from '../../../../public/Loading_backD.gif';
import { BoundStore } from '@/entities/trainerLevel/model/boundStorage';
import { useConfigContext } from '@/entities/trainerLevel/model/useConfigContext';
import { useWordsStore } from '@/entities/trainerLevel/model/wordsStorage';
//TODO: Rewrite storageZustand, rework UI flashcards and complete system of flashcards
// rewrite useFlashCheck, make survey before training, use google API for translating words

export const PickingWordCard = () => {
  const {
    wordIndex,
    call: handleResponsePickFlash,
    words,
    loadWords,
  } = useFlashCheck();

  const wordsGenMin = useConfigContext((s) => s.wordsGenMin);
  const setWordsGenMin = useConfigContext((s) => s.setWordsGenLimit);
  const setCleanConfig = useConfigContext((s) => s.setCleanStorage);
  const loadConfigStorage = useConfigContext((s) => s.loadConfigStorage);
  const prioritizedWords = useWordsStore((s) => s.prioritizedWords);
  console.log('wordsGenMin', wordsGenMin);

  useEffect(() => {
    loadWords(5, 5);
  }, []);

  return (
    <Card
      key={wordIndex}
      className={'flex flex-col justify-around bg-eclipseGray'}
    >
      <CardHeader className={'text-center text-2xl'}>
        Did you know this word?
      </CardHeader>
      <CardContent className={'flex flex-row gap-6'}>
        <div className={'flex min-w-[600px] flex-col'}>
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
        <Image width={150} height={150} alt={'LoadingGif'} src={LoadingGif} />
      </CardContent>
      <CardFooter className={'text-lg text-muted-foreground'}>
        DinoLanguage 2023
      </CardFooter>
    </Card>
  );
};
