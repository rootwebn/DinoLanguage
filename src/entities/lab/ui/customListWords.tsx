'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@/shared/ui';
import React from 'react';
import { FormsSets } from '@/shared/helpers/formsSets';
import { toast } from 'sonner';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import moment from 'moment';
import { AlertOctagon } from 'lucide-react';

export const CustomListWords = () => {
  const {
    onSubmitCustomList,
    formCustomListSchema,
    formCustomList,
    formCustomArray,
  } = FormsSets();
  const { customList } = PersistBoundStore();

  return (
    <Card className={'col-span-3 row-span-1 bg-eclipseGray'}>
      <CardHeader>
        Create whatever the list you want and almost on every language!
      </CardHeader>
      <CardContent>
        <Form {...formCustomList}>
          <form
            onSubmit={formCustomList.handleSubmit((values) =>
              onSubmitCustomList(values, formCustomList.setError),
            )}
            className={'block max-h-[500px] overflow-y-scroll'}
            autoComplete="off"
          >
            <div className={'grid grid-cols-2 gap-4'}>
              <FormField
                control={formCustomList.control}
                name="listName"
                render={({ field }) => (
                  <FormItem className={'col-span-1 row-span-1 flex flex-col'}>
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
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={formCustomList.control}
                name="listDesc"
                render={({ field }) => (
                  <FormItem
                    className={'col-span-1 row-span-1 mr-4 flex flex-col'}
                  >
                    <div className={'grid grid-cols-1 grid-rows-2'}>
                      <FormLabel className={'flex items-center'}>
                        Some description here
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={'items-center bg-darkSpace'}
                          placeholder="Write your word here..."
                          {...formCustomList.register('listDesc')}
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {formCustomArray.fields.map((field, index) => (
              <div key={field.id}>
                <div key={field.id} className={'grid grid-cols-2 gap-4'}>
                  <FormField
                    control={formCustomList.control}
                    name={`listWords.${index}.customWord`}
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
                                `listWords.${index}.customWord`,
                              )}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formCustomList.control}
                    name={`listWords.${index}.customDef`}
                    render={({ field }) => (
                      <FormItem
                        className={
                          'col-span-1 row-span-1 mr-4 mt-4 flex flex-col'
                        }
                      >
                        <div className={'grid grid-cols-1 grid-rows-2'}>
                          <FormLabel className={'flex items-center'}>
                            Write def you want to remember
                          </FormLabel>
                          <FormControl>
                            <Input
                              className={'items-center bg-darkSpace'}
                              placeholder="Write your word here..."
                              {...field}
                              {...formCustomList.register(
                                `listWords.${index}.customDef`,
                              )}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
            <div
              className={
                'sticky bottom-0 z-10 ml-4 mr-4 mt-4 flex flex-row justify-between'
              }
            >
              <Button
                type={'submit'}
                className={'col-span-1'}
                onClick={() =>
                  toast(
                    <div className={''}>
                      {formCustomList.formState.isValid ? (
                        <div>
                          Custom list created! Here is data:
                          <div>
                            List Name: {formCustomList.getValues('listName')}
                          </div>
                          <div>
                            List Description:{' '}
                            {formCustomList.getValues('listDesc')}
                          </div>
                          <div>List Date: {moment().format('LLL')}</div>
                        </div>
                      ) : (
                        <div className={'flex flex-row'}>
                          <AlertOctagon className={'mr-2'} />
                          Custom list was not created. Form is NOT valid.
                        </div>
                      )}
                    </div>,
                  )
                }
              >
                Create List!
              </Button>
              <Button
                className={''}
                onClick={() =>
                  formCustomArray.append({
                    customWord: '',
                    customDef: '',
                  })
                }
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
