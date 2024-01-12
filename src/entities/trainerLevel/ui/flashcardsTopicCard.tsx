import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui';
import React from 'react';
import { Settings2 } from 'lucide-react';
import { FlashcardsDialogSettings } from '@/entities/trainerLevel/ui/flashcardsDialogSettings';
import Link from 'next/link';
import { CustomListForm } from '@/entities/trainerLevel/ui/customListForm';
import { SettingsForm } from '@/entities/trainerLevel/ui/settingsForm';

interface FlashcardsTopicCardInterface {
  titleCardTopic: string;
  descCardTopic: string;
  iconCardTopic: JSX.Element;
  customListWords: boolean;
}

export const FlashcardsTopicCard: React.FC<FlashcardsTopicCardInterface> = ({
  titleCardTopic,
  descCardTopic,
  iconCardTopic,
  customListWords,
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
        <div className={'flex flex-row justify-between'}>
          <div>
            <FlashcardsDialogSettings customListWords={customListWords} />
          </div>
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
