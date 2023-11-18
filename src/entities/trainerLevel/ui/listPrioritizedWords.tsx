import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useWordsStore } from '@/entities/trainerLevel/model/storageZustand';

export const ListPrioritizedWords = () => {
  const prioritizedWords = useWordsStore((state) => state.prioritizedWords);
  const listWords = prioritizedWords.join(', ');
  return (
    <Card>
      <CardHeader>Here is list of your problems word:</CardHeader>
      <CardContent className={'flex flex-col'}>
        <div className={'text-2xl'}>{listWords}</div>
        {/*<div className={'text-2xl'}>{listWordsTranslated}</div>*/}
      </CardContent>
      <CardFooter>DinoLanguage 2023</CardFooter>
    </Card>
  );
};
