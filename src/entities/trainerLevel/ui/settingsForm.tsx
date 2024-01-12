import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/ui';
import { FormsSets } from '@/entities/trainerLevel/model/formsSets';
import React from 'react';
import { toast } from 'sonner';
import { Checkbox } from '@/shared/ui/checkbox';
import { PersistBoundStore } from '@/entities/trainerLevel/model/persistBoundStorage';

export const SettingsForm = () => {
  const { onSubmit, configForm } = FormsSets();
  const { setCleanConfig } = PersistBoundStore();

  return (
    <Form {...configForm}>
      <div className={'flex flex-col'}>
        <form
          onSubmit={configForm.handleSubmit((configProp) =>
            onSubmit(configProp),
          )}
          className="flex flex-col space-y-2"
        >
          <FormField
            control={configForm.control}
            name="wordsMemo"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <FormLabel className={'max-w-[50%]'}>
                  How much words you want memorize?
                </FormLabel>
                <FormControl className={'max-w-[20%]'}>
                  <Input
                    type={'number'}
                    {...field}
                    {...configForm.register('wordsMemo', {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={configForm.control}
            name="time"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <div className={'flex flex-col'}>
                  <FormLabel className={''}>
                    How much time you want on every stage?
                  </FormLabel>
                  <FormDescription>In seconds</FormDescription>
                </div>
                <FormControl className={'max-w-[20%]'}>
                  <Input
                    type={'number'}
                    {...field}
                    {...configForm.register('time', { valueAsNumber: true })}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={configForm.control}
            name="difficult"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <div className={'flex flex-col'}>
                  <FormLabel className={''}>
                    How hard words must being?
                  </FormLabel>
                  <FormDescription>
                    A1 - 1, A2 - 2, B1 - 3, B2 - 4, C1 - 5, C2 - 6
                  </FormDescription>
                </div>
                <FormControl className={'max-w-[20%]'}>
                  <Input
                    type={'number'}
                    {...field}
                    {...configForm.register('difficult', {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={configForm.control}
            name="peacefulMode"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <div className={'flex flex-col'}>
                  <FormLabel className={''}>Peaceful Mode</FormLabel>
                  <FormDescription>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    This mode disable timer on every stage, but you can't get
                    achievements.
                  </FormDescription>
                </div>
                <FormControl className={'max-w-[20%]'}>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className={'bg-lightSpace'}
            type={'submit'}
            onClick={() =>
              toast('Settings was saved!', {
                description: `Words to memo: ${configForm.getValues(
                  'wordsMemo',
                )}, Time on every stage: ${configForm.getValues(
                  'time',
                )}, Difficult of game: ${configForm.getValues(
                  'difficult',
                )}, Peaceful Mode: ${configForm.getValues('peacefulMode')}`,
                action: {
                  label: 'Set to Default',
                  onClick: () => setCleanConfig(),
                },
              })
            }
          >
            Save Settings!
          </Button>
        </form>
      </div>
    </Form>
  );
};
