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

interface FlashcardsTopicCardInterface {
  titleCardTopic: string;
  descCardTopic: string;
  iconCardTopic: JSX.Element;
}

export const FlashcardsCustomTopic: React.FC<FlashcardsTopicCardInterface> = ({
  titleCardTopic,
  descCardTopic,
  iconCardTopic,
}) => {
  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle className={'flex flex-row'}>
          {iconCardTopic}
          {/*<Settings2 className={'mr-0.5 min-w-[24px]'} />*/}
          {titleCardTopic}
        </CardTitle>
        <CardDescription>
          {descCardTopic}
          {/*You can create your very own set words and setup almost everything.*/}
        </CardDescription>
      </CardHeader>
      <CardContent className={'flex flex-col'}>
        <div></div>
        <div className={'flex flex-row justify-between'}>
          <Button className={'bg-lightSpace'}>Settings</Button>
          <Button className={'bg-lightSpace'}>Start Game!</Button>
        </div>
      </CardContent>
    </Card>
  );
};
