import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useFlashCheck } from '@/entities/trainerLevel/model';
import { useEffect } from 'react';
import { FetchResponse } from '@/entities/trainerLevel/model/request';

export const ListPrioritizedWords = () => {
  const {
    translatedText,
    prioritizedWords,
    setTranslatedText,
    listPrioritizedWordsHandle,
  } = useFlashCheck();
  const listWords = prioritizedWords.join(', ');
  const translatedListWords = translatedText.join(', ');

  useEffect(() => {
    FetchResponse(prioritizedWords)
      .then((responseData) => {
        console.log('Translated Text:', responseData.translatedText);
        setTranslatedText(responseData.translatedText);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [prioritizedWords]);

  return (
    <Card className={'flex flex-col'}>
      <CardHeader>Here is list of your problems word:</CardHeader>
      <CardContent className={'flex flex-col'}>
        <div className={''}>
          <div>
            <div className={'text-2xl'}>{listWords}</div>
          </div>
          <div>
            <div className={'text-2xl'}>{translatedListWords}</div>
          </div>
          <div>
            <Button onClick={listPrioritizedWordsHandle}>Next Stage!</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>DinoLanguage 2023</CardFooter>
    </Card>
  );
};
