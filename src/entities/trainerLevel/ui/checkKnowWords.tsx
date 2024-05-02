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
import Image from 'next/image';
import LoadingGif from '../../../../public/Loading_backD.gif';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { FormsSets } from '@/shared/helpers/formsSets';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';

export function CheckKnowWords() {
  const { userSelectLevel, currentCustomList } = PersistBoundStore();
  const { prioritizedWords, wordIndex } = BoundStore();
  const { formFlash, onSubmitInput } = FormsSets();

  return (
    <Card className={'bg-eclipseGray'}>
      <CardHeader className={'flex flex-row'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Okay! Let's check how&nbsp;<div className={'font-bold'}>{'good'}</div>
        &nbsp;you know these words.
      </CardHeader>
      <CardContent className={'grid grid-cols-3 gap-6'}>
        <div className={'col-span-2'}>
          <Form {...formFlash}>
            <form
              onSubmit={formFlash.handleSubmit((values) =>
                onSubmitInput(values, formFlash.resetField, formFlash.setError),
              )}
              className="space-y-6"
              autoComplete="off"
            >
              <FormField
                control={formFlash.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {userSelectLevel === 'customL' ? (
                        <>
                          How to translate word{' '}
                          {currentCustomList.listWords[wordIndex].customWord}?
                        </>
                      ) : (
                        <>
                          How to translate word {prioritizedWords[wordIndex]}?
                        </>
                      )}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={'bg-darkSpace'}
                        placeholder="Write your answer here..."
                        {...field}
                      />
                    </FormControl>

                    <FormDescription>
                      This is easy question, right? Right...?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <div className={'flex justify-around'}>
          <Image width={150} height={150} alt={'LoadingGif'} src={LoadingGif} />
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
