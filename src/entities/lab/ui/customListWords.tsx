'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/ui';
import React, { useState } from 'react';
import { FormsSets } from '@/shared/helpers/formsSets';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const CustomListWords = () => {
  const { onSubmitCustomList, formCustomListSchema } = FormsSets();
  const [flashcardsId, setFlashcardsId] = useState<number[]>([1]);
  const handleListFlashcards = () => {
    setFlashcardsId([...flashcardsId, flashcardsId.length + 1]);
  };

  const formCustomList = useForm<z.infer<typeof formCustomListSchema>>({
    resolver: zodResolver(formCustomListSchema),
    defaultValues: {
      custom: {
        wordCustom: '',
        definitionCustom: '',
        listName: '',
        descList: '',
      }[]
    },
  });
  const controlL = formCustomList.control;

  const formCustomArray = useFieldArray({
    control: formCustomList.control,
    // @ts-ignore - some error or bug with form or webStorm, idk
    name: 'test',
  });

  return (
    <Card className={'col-span-3 row-span-1 bg-eclipseGray'}>
      <CardHeader>
        Create whatever the list you want and almost on every language!
      </CardHeader>
      <CardContent>
        <Form {...formCustomList}>
          <form
            onSubmit={formCustomList.handleSubmit((values) =>
              onSubmitCustomList(values),
            )}
            // className="grid grid-cols-2 grid-rows-1 gap-6"
            className={'block max-h-[300px] overflow-y-scroll'}
            autoComplete="off"
          >
            <FormField
              control={formCustomList.control}
              name="listName"
              render={({ field }) => (
                <FormItem
                  className={
                    'col-span-1 row-span-1 ml-4 mr-4 mt-4 flex flex-col'
                  }
                >
                  <div className={'grid grid-cols-1 grid-rows-2'}>
                    <FormLabel className={'flex items-center'}>
                      Name your list!
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={'items-center bg-darkSpace'}
                        placeholder="Write your word here..."
                        {...field}
                        {...formCustomList.register('listName')}
                      />
                    </FormControl>
                  </div>
                  {/*<FormMessage />*/}
                </FormItem>
              )}
            />
            <FormField
              control={formCustomList.control}
              name="descList"
              render={({ field }) => (
                <FormItem
                  className={
                    'col-span-1 row-span-1 ml-4 mr-4 mt-4 flex flex-col'
                  }
                >
                  <div className={'grid grid-cols-1 grid-rows-2'}>
                    <FormLabel className={'flex items-center'}>
                      Some description here
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={'items-center bg-darkSpace'}
                        placeholder="Write your word here..."
                        {...formCustomList.register('descList')}
                        {...field}
                      />
                    </FormControl>
                  </div>
                  {/*<FormMessage />*/}
                </FormItem>
              )}
            />
            {formCustomArray.fields.map((field, index) => (
              <div key={field.id}>
                <div key={field.id}>
                  <FormField
                    control={formCustomList.control}
                    name="wordCustom"
                    render={({ field }) => (
                      <FormItem
                        className={'col-span-1 row-span-1 mt-4 flex flex-col'}
                      >
                        <div className={'grid grid-cols-1 grid-rows-2'}>
                          <FormLabel className={'flex items-center'}>
                            Write word you want to remember
                          </FormLabel>
                          <FormControl>
                            <Input
                              className={'items-center bg-darkSpace'}
                              placeholder="Write your word here..."
                              {...field}
                              {...formCustomList.register(
                                `wordCustom.${index}`,
                              )}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formCustomList.control}
                    name="definitionCustom"
                    render={({ field }) => (
                      <FormItem
                        className={'col-span-1 row-span-1 mt-4 flex flex-col'}
                      >
                        <div className={'grid grid-cols-1 grid-rows-2'}>
                          <FormLabel className={'flex items-center'}>
                            Write word you want to remember
                          </FormLabel>
                          <FormControl>
                            <Input
                              className={'items-center bg-darkSpace'}
                              placeholder="Write your word here..."
                              {...field}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
            {/*{flashcardsId.map((cardId) => (*/}
            {/*  <div*/}
            {/*    key={`card_${cardId}`}*/}
            {/*    className={'col-span-2 ml-4 mr-4 grid grid-cols-2 gap-6'}*/}
            {/*  >*/}

            {/*    <FormField*/}
            {/*      control={formCustomList.control}*/}
            {/*      name="definitionCustom"*/}
            {/*      render={({ field }) => (*/}
            {/*        <FormItem*/}
            {/*          className={'col-span-1 row-span-1 mt-4 flex flex-col'}*/}
            {/*        >*/}
            {/*          <div className={'grid grid-cols-1 grid-rows-2'}>*/}
            {/*            <FormLabel className={'flex items-center'}>*/}
            {/*              Write definition of your word*/}
            {/*            </FormLabel>*/}
            {/*            <FormControl>*/}
            {/*              <Input*/}
            {/*                className={'items-center bg-darkSpace'}*/}
            {/*                placeholder="Write your definition here..."*/}
            {/*                {...field}*/}
            {/*                {...formCustomList.register('definitionCustom')}*/}
            {/*              />*/}
            {/*            </FormControl>*/}
            {/*          </div>*/}
            {/*          /!*<FormMessage />*!/*/}
            {/*        </FormItem>*/}
            {/*      )}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*))}*/}
            <div
              className={
                'sticky bottom-0 z-10 ml-4 mr-4 mt-4 flex flex-row justify-between'
              }
            >
              <Button type={'submit'} className={'col-span-1'}>
                Create List!
              </Button>
              <Button
                className={''}
                onClick={handleListFlashcards}
                type={'button'}
              >
                Create new card
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
