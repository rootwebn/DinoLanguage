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
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export function CheckKnowWords() {
  const {
    prioritizedWords,
    wordIndex,
    formSchema,
    onSubmitInput,
    errorFormFlash,
  } = useFlashCheck();

  const formFlash = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: '',
    },
  });

  return (
    <Card>
      <CardHeader className={'flex flex-row'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Okay! Let's check how&nbsp;<div className={'font-bold'}>{'good'}</div>
        &nbsp;you know these words.
      </CardHeader>
      <CardContent>
        <Form {...formFlash}>
          <form
            onSubmit={formFlash.handleSubmit((values) =>
              onSubmitInput(values, formFlash.resetField, formFlash.setError),
            )}
            className="space-y-8"
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
                    <Input placeholder="Write your answer here..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is easy question, right? Right...?
                    {errorFormFlash && <p className={''}>Wrong Answer!</p>}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
