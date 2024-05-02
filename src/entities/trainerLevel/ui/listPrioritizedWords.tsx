'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useEffect } from 'react';
import { fetchResponseTranslation } from '@/shared/api/translate';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import LoadingGif from '../../../../public/Loading_backD.gif';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { toast } from 'sonner';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';

export const ListPrioritizedWords = () => {
  const {
    setStageFlash,
    setDataTranslation,
    prioritizedWords,
    setStageBrain,
    setExactWordIndex,
  } = BoundStore();
  const { userGameMode } = PersistBoundStore();
  const translated = useMutation({
    mutationFn: fetchResponseTranslation,
  });

  const translatedWordsData = translated.data?.translatedText;
  toast.message(`Response from server: ${translated.data?.translatedText}`);

  useEffect(() => {
    translated.mutate(prioritizedWords);
  }, [prioritizedWords, translated.mutate]);

  useEffect(() => {
    if (translated.data) {
      setDataTranslation(translatedWordsData);
      toast.message('worked');
    }
  }, [translated.data]);

  const listPriorHandler = () => {
    if (userGameMode === 'brainstorm') {
      setStageBrain(3);
    }
    if (userGameMode === 'flashcards') {
      setStageFlash(3);
    }
    setExactWordIndex(0);
  };

  return (
    <Card className={'flex flex-col bg-eclipseGray'}>
      <CardHeader>
        {translated.isError
          ? 'Error while request information!'
          : 'Here is list of your problems word:'}
      </CardHeader>
      <CardContent className={'flex flex-col'}>
        <div className={''}>
          {translated.isPending ? (
            <div>
              <p>Pending request</p>
              <Image
                width={150}
                height={150}
                alt={'LoadingGif'}
                src={LoadingGif}
              />
            </div>
          ) : translated.isError ? (
            <div>
              <p>Error: {translated.error.message}</p>
              <p>Error: {translated.error.name}</p>
            </div>
          ) : (
            <div>
              <div className={'text-2xl'}>{prioritizedWords.join(', ')}</div>
              <div>
                {translatedWordsData && (
                  <div className={'text-2xl'}>
                    {translatedWordsData.join(', ')}
                  </div>
                )}
              </div>
              <Button onClick={listPriorHandler}>Next Stage!</Button>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        DinoLanguage 2023 - Don't forget about time! It's really matter...
      </CardFooter>
    </Card>
  );
};
