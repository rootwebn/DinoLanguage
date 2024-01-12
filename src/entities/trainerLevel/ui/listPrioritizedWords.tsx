'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useEffect } from 'react';
import { fetchResponseTranslation } from '@/shared/api/translate';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import LoadingGif from '../../../../public/Loading_backD.gif';
import { BoundStore } from '@/entities/trainerLevel/model/boundStorage';

export const ListPrioritizedWords = () => {
  const { setStageFlash, setDataTranslation, prioritizedWords } = BoundStore();
  const translated = useMutation({
    mutationFn: fetchResponseTranslation,
  });

  const translatedWordsData = translated.data?.translatedText;
  console.log('Response from server:', translated.data);

  useEffect(() => {
    translated.mutate(prioritizedWords);
  }, [prioritizedWords, translated.mutate]);

  useEffect(() => {
    if (translated.data) {
      setDataTranslation(translatedWordsData);
    }
  }, [translated.data]);

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
              <Button onClick={() => setStageFlash(3)}>Next Stage!</Button>
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
