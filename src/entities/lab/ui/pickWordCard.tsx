'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/ui';
import { FormsSets } from '@/shared/helpers/formsSets';
import * as z from 'zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchWordInfo } from '@/shared/api/wordInfo';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { WordInfoCard } from '@/entities/lab/ui/wordInfoCard';
import ImgGif from '../../../../public/Loading_backD.gif';
import React from 'react';
import Image from 'next/image';

export const PickWordCard = () => {
  const { formLab, formLabSchema } = FormsSets();
  const { wordsRequest, setWordRequest } = BoundStore();

  const wordInfo = useQuery({
    queryKey: ['wordsAndSmt', wordsRequest],
    queryFn: () => fetchWordInfo(wordsRequest),
    enabled: Boolean(wordsRequest),
  });

  const onSubmitLab = (value: z.infer<typeof formLabSchema>) => {
    setWordRequest(value.wordRequest);
    wordInfo.refetch().then();
  };

  return (
    <Card className={'col-span-3 row-span-2 bg-eclipseGray'}>
      <CardHeader>
        <CardTitle>The Lab!</CardTitle>
        <CardDescription>
          Check if you need whatever word you need, and pick this word into your
          custom list to learn it!
        </CardDescription>
      </CardHeader>
      <CardContent className={'flex flex-col gap-6'}>
        <Form {...formLab}>
          <form
            onSubmit={formLab.handleSubmit((values) => onSubmitLab(values))}
            className="space-y-6"
            autoComplete="off"
          >
            <FormField
              control={formLab.control}
              name="wordRequest"
              render={({ field }) => (
                <FormItem className={'mt-4 flex flex-col'}>
                  <div className={'grid grid-cols-2 grid-rows-1'}>
                    <FormLabel className={'flex items-center'}>
                      Write word you want to explore
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={'items-center bg-darkSpace'}
                        placeholder="Write your word here..."
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <div className={'flex flex-row justify-between'}>
                    <FormDescription>This is it...</FormDescription>
                    <Button type={'submit'}>Explore word!</Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        {wordInfo.isSuccess && wordInfo?.data[0] ? (
          <WordInfoCard
            word={wordInfo.data[0].word}
            phonetics={wordInfo.data[0].phonetics}
            meanings={wordInfo.data[0].meanings}
          />
        ) : (
          <Card className={'min-w-[400px]'}>
            <CardHeader>Information about your word!</CardHeader>
            <CardContent>
              {wordInfo.isError ? (
                <div>
                  <p>{wordInfo.error.message}</p>
                  <p>Word is wrote wrong or word missing in search. Sorry!</p>
                </div>
              ) : (
                <>
                  {wordInfo.isFetching ? (
                    <Image
                      src={ImgGif}
                      alt={'GifSpinnerFetching'}
                      className={'max-h-[200px] max-w-[170px]'}
                    />
                  ) : (
                    <p>Nothing here...</p>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
