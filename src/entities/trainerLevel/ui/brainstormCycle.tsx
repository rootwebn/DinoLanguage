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
import { BoundStore } from '@/shared/helpers/boundStorage';
import { toast } from 'sonner';
import { BrainCycleFalseTranslation } from '@/entities/trainerLevel/ui/brainCycleFalseTranslation';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { useMutation } from '@tanstack/react-query';
import { fetchResponseTranslation } from '@/shared/api/translate';
import { useEffect } from 'react';
import { generateRandomWords } from '@/entities/trainerLevel/model/generateRandomWords';

export const BrainstormCycle = () => {
  const { brainstormOnSubmit, brainstormForm } = FormsSets();
  const {
    gameChallenge,
    translatedWordsFalse,
    translatedWordsRes,
    prioritizedWords,
    setDataTranslationFalse,
    wordIndex,
  } = BoundStore();

  const translated = useMutation({
    mutationFn: fetchResponseTranslation,
  });

  const translatedWordsData = translated.data?.translatedText;
  toast.message(`Response from server: ${translated.data?.translatedText}`);

  useEffect(() => {
    translated.mutate(generateRandomWords(2, 2));
  }, [translated.mutate, generateRandomWords]);

  useEffect(() => {
    if (translated.data) {
      setDataTranslationFalse(translatedWordsData);
      console.log('bug');
      toast.message('worked falseDataTranslation');
    }
  }, [translated.data, setDataTranslationFalse]);

  const handler = () => {
    toast.message(
      `current translated words ${translatedWordsFalse.translatedWords}`,
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>The Cycle of Storm</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...brainstormForm}>
          <form
            onSubmit={brainstormForm.handleSubmit((values) =>
              brainstormOnSubmit(
                values,
                brainstormForm.resetField,
                brainstormForm.setError,
              ),
            )}
            className="space-y-6"
            autoComplete="off"
          >
            {gameChallenge === 'falseTranslate' ? (
              <FormField
                control={brainstormForm.control}
                name="userAnswerFalseTranslation"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      How to translate word {prioritizedWords[wordIndex]}?
                      Choose variant below.
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
            ) : (
              <FormField
                control={brainstormForm.control}
                name="userAnswer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {gameChallenge === 'translate' && (
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
                    <Button type="submit">Submit</Button>
                    <FormDescription>
                      This is easy question, right? Right...?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button onClick={handler}>Test</Button>
      </CardFooter>
    </Card>
  );
};
