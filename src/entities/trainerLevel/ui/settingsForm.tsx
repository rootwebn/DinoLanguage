import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';
import { FormsSets } from '@/shared/helpers/formsSets';
import React from 'react';
import { toast } from 'sonner';
import { Checkbox } from '@/shared/ui/checkbox';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { PresetWordsWindow } from '@/entities/trainerLevel/ui/presetWordsWindow';

type SettingsFormType = {
  customListWords: boolean;
};

export const SettingsForm: React.FC<SettingsFormType> = ({
  customListWords,
}) => {
  const { onSubmit, configForm } = FormsSets();
  const { setCleanConfig } = PersistBoundStore();

  return (
    <Form {...configForm}>
      <div className={'grid grid-cols-2 grid-rows-1 gap-6'}>
        {customListWords && <PresetWordsWindow />}
        <form
          onSubmit={configForm.handleSubmit((configProp) =>
            onSubmit(configProp),
          )}
          className="flex flex-col justify-around"
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
          <FormField
            control={configForm.control}
            name="targetLanguage"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <FormLabel className={''}>Target Language</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
          <Button
            className={'bg-lightSpace'}
            type={'submit'}
            onClick={() =>
              toast.success('Settings was saved!', {
                description: `Words to memo: ${configForm.getValues(
                  'wordsMemo',
                )}, Time on every stage: ${configForm.getValues(
                  'time',
                )}, Difficult of game: ${configForm.getValues(
                  'difficult',
                )}, Peaceful Mode: ${configForm.getValues(
                  'peacefulMode',
                )}, Target Language: ${configForm.getValues('targetLanguage')}`,
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
