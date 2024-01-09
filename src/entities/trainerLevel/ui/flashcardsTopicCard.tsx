import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import React from 'react';
import { Settings2 } from 'lucide-react';
import { FlashcardsDialogSettings } from '@/entities/trainerLevel/ui/flashcardsDialogSettings';
import Link from 'next/link';

interface FlashcardsTopicCardInterface {
  titleCardTopic: string;
  descCardTopic: string;
  iconCardTopic: JSX.Element;
}

export const FlashcardsTopicCard: React.FC<FlashcardsTopicCardInterface> = ({
  titleCardTopic,
  descCardTopic,
  iconCardTopic,
}) => {
  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle className={'flex flex-row'}>
          {iconCardTopic}
          {titleCardTopic}
        </CardTitle>
        <CardDescription>{descCardTopic}</CardDescription>
      </CardHeader>
      <CardContent className={'flex flex-col'}>
        <div></div>
        <div className={'flex flex-row justify-between'}>
          <FlashcardsDialogSettings />
          <Button className={'bg-lightSpace'} asChild>
            <Link href={'/trainers/flashcards/level-1/random-topic'}>
              Start Game!
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
