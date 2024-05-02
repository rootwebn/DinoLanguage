import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import React from 'react';
import { FlashcardsDialogSettings } from '@/entities/settings/flashcardsDialogSettings';
import Link from 'next/link';
import { BoundStore } from '@/shared/helpers/boundStorage';

interface FlashcardsTopicCardInterface {
  titleCardTopic: string;
  descCardTopic: string;
  iconCardTopic: JSX.Element;
  customListWords: boolean;
  classNameCard?: string;
}

export const FlashcardsTopicCard: React.FC<FlashcardsTopicCardInterface> = ({
  titleCardTopic,
  descCardTopic,
  iconCardTopic,
  customListWords,
  classNameCard,
}) => {
  const { setStageFlash } = BoundStore();

  return (
    <Card className={classNameCard}>
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
          <Button className={'bg-lightSpace'} onClick={() => setStageFlash(3)}>
            Start Game!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
