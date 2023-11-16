import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';

export const RepeatWordsCard = () => {
  const { wordIndex } = useFlashCheck();

  return (
    <Card key={wordIndex}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <CardHeader>Okay! Let's repeat some words.</CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
