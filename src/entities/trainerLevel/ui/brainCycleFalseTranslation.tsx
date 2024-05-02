'use client';

import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui';
import { FormsSets } from '@/shared/helpers/formsSets';
import { useMutation } from '@tanstack/react-query';
import { fetchResponseTranslation } from '@/shared/api/translate';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';
import { BoundStore } from '@/shared/helpers/boundStorage';

export const BrainCycleFalseTranslation = () => {
  const { brainstormOnSubmit, brainstormForm } = FormsSets();
  const {
    translatedWordsFalse,
    setDataTranslationFalse,
    wordIndex,
    translatedWordsRes,
    prioritizedWords,
  } = BoundStore();

  // const translated = useMutation({
  //   mutationFn: fetchResponseTranslation,
  // });
  //
  // const translatedWordsData = translated.data?.translatedText;
  // toast.message(`Response from server: ${translated.data?.translatedText}`);
  //
  // useEffect(() => {
  //   translated.mutate(generateRandomWords(2, 2));
  // }, [translated.mutate, generateRandomWords]);
  //
  // useEffect(() => {
  //   if (translated.data) {
  //     setDataTranslationFalse(translatedWordsData);
  //     toast.message('worked falseDataTranslation');
  //   }
  // }, [translated.data]);

  return (
    <FormField
      control={brainstormForm.control}
      name="userAnswerFalseTranslation"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>
            How to translate word {prioritizedWords[wordIndex]}? Choose variant
            below.
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="false-1" />
                </FormControl>
                <FormLabel className="font-normal">
                  {translatedWordsFalse.translatedWords[0]}
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="false-2" />
                </FormControl>
                <FormLabel className="font-normal">
                  {translatedWordsFalse.translatedWords[1]}
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="true" />
                </FormControl>
                <FormLabel className="font-normal">
                  {translatedWordsRes.translatedWords[wordIndex]}
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <Button type="submit">Submit</Button>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
