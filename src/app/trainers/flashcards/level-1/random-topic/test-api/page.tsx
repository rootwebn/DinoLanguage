'use client';
import React from 'react';
import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TestApi = () => {
  // const { setTranslatedText, translatedText, prioritizedWords } =
  //   useFlashCheck();
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
  const data = ['hell', 'hello', 'run'];

  const fetchTodoList = async (data: string[]) => {
    const response = await axios.post('http://localhost:5000/translate', {
      q: data,
      source: 'en',
      target: 'ru',
      format: 'text',
      api_key: '',
    });
    return response.data;
  };

  const info = useMutation({ mutationFn: fetchTodoList });
  console.log(info.data);
  return (
    <div>
      <Card>
        <CardHeader>Fetching Test</CardHeader>
        <CardContent>
          {}
          <Button onClick={() => info.mutate(data)}>Load Translate</Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default TestApi;
