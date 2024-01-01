'use client';
import React, { useEffect } from 'react';
import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFlashCheck } from '@/entities/trainerLevel/model';

const TestApi = () => {
  const { prioritizedWords } = useFlashCheck();
  // useEffect(() => {
  //   cleanStore();
  // }, [cleanStore]);
  //
  // useEffect(() => {
  //   FetchResponse(prioritizedWords)
  //     .then((responseData) => {
  //       console.log('Translated Text:', responseData.translatedText);
  //       setTranslatedText(responseData.translatedText);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);

  // const listTranslatedWords = translatedText.join(', ');
  const dataToTranslate = prioritizedWords;
  const fetchTodoList = async (dataT: string[]) => {
    const response = await axios.post('http://localhost:5000/translate', {
      q: dataT,
      source: 'en',
      target: 'ru',
      format: 'text',
      api_key: '',
    });
    return response.data;
  };

  const { data, isPending, isError, error } = useMutation({
    mutationFn: () => fetchTodoList(dataToTranslate),
  });

  if (isPending) {
    return <h3>Pending request...</h3>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  const dataRender = data.translatedText;

  return (
    <div>
      <Card>
        <CardHeader>Fetching Test</CardHeader>
        <CardContent>
          {dataRender}
          <Button>Load Translate</Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default TestApi;
