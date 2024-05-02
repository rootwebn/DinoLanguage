import {
  Button,
  CardTitle,
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
import { PresetWordsWindow } from '@/entities/settings/presetWordsWindow';

export const SettingsForm: React.FC = () => {
  const { onSubmit, configForm } = FormsSets();
  const { setCleanConfig, setUserRole } = PersistBoundStore();

  return (
    <Form {...configForm}>
      <div className={'grid grid-cols-1 grid-rows-1 gap-6'}>
        <div className={'text-2xl'}>Text</div>
        <Select onValueChange={setUserRole}>
          <SelectTrigger className={'max-w-[200px]'}>
            <SelectValue placeholder={'Select mode'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'story'}>Story</SelectItem>
            <SelectItem value={'custom'}>Custom</SelectItem>
            <SelectItem value={'tutorial'}>Tutorial</SelectItem>
          </SelectContent>
        </Select>
        <form
          onSubmit={configForm.handleSubmit((configProp) =>
            onSubmit(configProp),
          )}
          className="flex flex-col justify-around"
        >
          <FormField
            control={configForm.control}
            name="userName"
            render={({ field }) => (
              <FormItem
                className={'flex flex-row items-center justify-between gap-6'}
              >
                <FormLabel className={'max-w-[50%]'}>Set your name!</FormLabel>
                <FormControl className={'max-w-[20%]'}>
                  <Input
                    placeholder={'root_r'}
                    {...field}
                    {...configForm.register('userName')}
                  />
                </FormControl>
              </FormItem>
            )}
          />
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
