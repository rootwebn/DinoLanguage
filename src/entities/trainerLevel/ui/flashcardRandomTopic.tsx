import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import { Dices } from 'lucide-react';

export const FlashcardRandomTopic = () => {
  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle className={'flex flex-row'}>
          <Dices className={'mr-0.5'} />
          Random topic
        </CardTitle>
        <CardDescription>
          Explore the Unpredictable: Random Topic Flashcards
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
