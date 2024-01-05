import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import {
  FlashcardsCustomTopic,
  FlashcardRandomTopic,
} from '@/entities/trainerLevel/ui/';

export const FlashcardsTopicSelect = () => {
  return (
    <Card className={''}>
      <CardHeader>
        <CardTitle>Pick up topic...</CardTitle>
        <CardDescription>
          We highly DO NOT recommend picking random topic due to low accuracy
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          translation words and some bugs with API which we can't really fix.
        </CardDescription>
      </CardHeader>
      <CardContent className={'flex flex-col gap-6'}>
        <div>
          <FlashcardsCustomTopic />
          <FlashcardRandomTopic />
        </div>
      </CardContent>
    </Card>
  );
};
