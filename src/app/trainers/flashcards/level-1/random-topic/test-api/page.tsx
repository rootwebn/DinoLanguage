'use client';
import React, { useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { FetchResponse } from '@/entities/trainerLevel/model/request';
import { useFlashCheck } from '@/entities/trainerLevel/model';

const TestApi = () => {
  const { setTranslatedText, translatedText, prioritizedWords } =
    useFlashCheck();

  useEffect(() => {
    FetchResponse(prioritizedWords)
      .then((responseData) => {
        console.log('Translated Text:', responseData.translatedText);
        setTranslatedText(responseData.translatedText);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const listTranslatedWords = translatedText.join(', ');
  return (
    <div>
      <Card>
        <CardHeader>Fetching Test</CardHeader>
        <CardContent>{listTranslatedWords}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default TestApi;
