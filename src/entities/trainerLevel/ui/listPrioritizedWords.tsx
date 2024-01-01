import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useFlashCheck } from '@/entities/trainerLevel/model';
import { useEffect } from 'react';
import { fetchResponseTranslation } from '@/entities/trainerLevel/model/request';
import { useMutation } from '@tanstack/react-query';
import { useBoundStore } from '@/entities/trainerLevel/model/boundStorage';

export const ListPrioritizedWords = () => {
  const {
    prioritizedWords,
    handleListWords,
    setDataTranslation,
    translatedWordsRes,
  } = useFlashCheck();
  const { prioritizedWordsFull } = useBoundStore();
  const translated = useMutation({
    mutationFn: fetchResponseTranslation,
  });

  const translatedWordsData = translated.data?.translatedText;
  console.log('Response from server:', translated.data);

  useEffect(() => {
    translated.mutate(prioritizedWords);
  }, [prioritizedWords, translated.mutate]);
  console.log('Zustand Storage of Translated Words:', translatedWordsRes);

  useEffect(() => {
    if (translated.data) {
      setDataTranslation(translatedWordsData);
    }
    console.log('does it works?');
  }, [translated.data]);

  return (
    <Card className={'flex flex-col'}>
      <CardHeader>
        {translated.isError
          ? 'Error while request information!'
          : 'Here is list of your problems word:'}
      </CardHeader>
      <CardContent className={'flex flex-col'}>
        <div className={''}>
          {translated.isPending ? (
            <p>Pending request</p>
          ) : translated.isError ? (
            <div>
              <p>Error: {translated.error.message}</p>
              <p>Error: {translated.error.name}</p>
            </div>
          ) : (
            <div>
              <div>
                <div className={'text-2xl'}>{prioritizedWords.join(', ')}</div>
                <div>
                  {translatedWordsData && (
                    <div className={'text-2xl'}>
                      {translatedWordsData.join(', ')}
                    </div>
                  )}
                </div>
              </div>
              <Button onClick={handleListWords}>Next Stage!</Button>
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
