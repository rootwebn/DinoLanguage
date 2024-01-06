import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import {
  FlashcardsCustomTopic,
  FlashcardRandomTopic,
} from '@/entities/trainerLevel/ui/';

export const FlashcardsTopicSelect = () => {
  return (
    <Card className={'max-h-[620px] max-w-[1200px] bg-lightSpace'}>
      <CardHeader>
        <CardTitle>Pick up topic...</CardTitle>
        <CardDescription>
          We highly DO NOT recommend picking random topic due to low accuracy
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          translation words and some bugs with API which we can't really fix.
        </CardDescription>
      </CardHeader>
      <CardContent
        className={
          'block flex max-h-[500px] w-full flex-row flex-row-reverse justify-end gap-6 overflow-y-scroll'
        }
      >
        <Card className={'bg-space'}>
          <CardHeader className={'text-center text-2xl'}>
            Catalog topics
          </CardHeader>
          <CardContent
            className={'grid grid-cols-3 grid-rows-1 gap-4 bg-space'}
          >
            <FlashcardsCustomTopic />
            <FlashcardRandomTopic />
            <FlashcardsCustomTopic />
          </CardContent>
          <CardFooter className={'justify-between rounded-b-lg bg-space'}>
            <div>DinoLanguage 2024</div>
            Version: 1.0.0
          </CardFooter>
        </Card>
        <Card className={'bg-space'}>
          <CardHeader>Filter</CardHeader>
          <CardContent></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
};
