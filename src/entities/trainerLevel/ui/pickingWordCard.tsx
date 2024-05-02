'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useEffect } from 'react';
import { useFlashCheck } from '@/entities/trainerLevel/model/';
import Image from 'next/image';
import LoadingGif from '../../../../public/Loading_backD.gif';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BoundStore } from '@/shared/helpers/boundStorage';

export const PickingWordCard = () => {
  const { call: handleResponsePickFlash, loadWords } = useFlashCheck();
  const { words, wordIndex } = BoundStore();
  const { wordsGenMin } = PersistBoundStore();
  console.log('wordsGenMin', wordsGenMin);

  useEffect(() => {
    loadWords(5, 5);
  }, []);

  return (
    <Card
      key={wordIndex}
      className={'grid grid-cols-4 grid-rows-1 bg-eclipseGray'}
    >
      <CardHeader className={'col-span-4 text-center text-2xl'}>
        Did you know this word?
      </CardHeader>
      <CardContent className={'col-start-1 col-end-4 flex flex-row gap-6'}>
        <div className={'min-w-full'}>
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
      <Image
        width={150}
        height={150}
        alt={'LoadingGif'}
        src={LoadingGif}
        className={'col-start-4'}
      />
      <CardFooter
        className={'col-span-2 row-start-3 text-lg text-muted-foreground'}
      >
        DinoLanguage 2023
      </CardFooter>
    </Card>
  );
};
