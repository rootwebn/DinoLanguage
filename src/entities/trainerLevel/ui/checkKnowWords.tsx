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
import { useFlashCheck } from '@/entities/trainerLevel/model';
import Image from 'next/image';
import LoadingGif from '../../../../public/Loading_backD.gif';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { FormsSets } from '@/shared/helpers/formsSets';

export function CheckKnowWords() {
  const { prioritizedWords, wordIndex } = BoundStore();
  const { formFlash, onSubmitInput } = FormsSets();

  return (
    <Card className={'bg-eclipseGray'}>
      <CardHeader className={'flex flex-row'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Okay! Let's check how&nbsp;<div className={'font-bold'}>{'good'}</div>
        &nbsp;you know these words.
      </CardHeader>
      <CardContent className={'flex flex-row gap-6'}>
        <div className={'min-w-[600px]'}>
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
                      How to translate word {prioritizedWords[wordIndex]}?
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
            </form>
          </Form>
        </div>
        <Image width={150} height={150} alt={'LoadingGif'} src={LoadingGif} />
      </CardContent>
      <CardFooter>
        <Button type="submit">Submit</Button>
      </CardFooter>
    </Card>
  );
}
