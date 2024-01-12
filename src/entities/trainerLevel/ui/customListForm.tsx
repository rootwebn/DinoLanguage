import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/shared/ui';
import React from 'react';
import { FormsSets } from '@/entities/trainerLevel/model/formsSets';

export const CustomListForm = () => {
  const { customListForm, onSubmitCustomList, formCustomListSchema } =
    FormsSets();
  return (
    <Form {...customListForm}>
      <form
        onSubmit={customListForm.handleSubmit((customListProp) =>
          onSubmitCustomList(customListProp),
        )}
      >
        <div className={'flex flex-row gap-4'}>
          <FormField
            control={customListForm.control}
            name="customWord"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <FormLabel className={'max-w-[50%]'}>Word:</FormLabel>
                <FormControl className={''}>
                  <Input
                    {...field}
                    {...customListForm.register('customWord')}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={customListForm.control}
            name="customDefinition"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <FormLabel className={'max-w-[50%]'}>Definition:</FormLabel>
                <FormControl className={''}>
                  <Input
                    {...field}
                    {...customListForm.register('customDefinition')}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={customListForm.control}
          name="targetLanguage"
          render={({ field }) => (
            <FormItem
              className={'flex flex-row items-center justify-between gap-6'}
            >
              <FormLabel className={''}>Target Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className={'max-w-[30%]'}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={'Select target language to learn'}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={'en'}>English</SelectItem>
                  <SelectItem value={'de'}>German</SelectItem>
                  <SelectItem value={'pl'}>Polish</SelectItem>
                  <SelectItem value={'uk'}>Ukraine</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type={'submit'}>Save List!</Button>
      </form>
    </Form>
  );
};
