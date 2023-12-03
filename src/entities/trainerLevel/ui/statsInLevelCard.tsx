import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useFlashCheck } from '@/entities/trainerLevel/model';
import { useStatsLevel } from '@/entities/trainerLevel/model/useStatsLevel';

export const StatsInLevelCard = () => {
  const { indexStage } = useFlashCheck();
  const { time } = useStatsLevel();

  return (
    <Card className={'row-span-1'}>
      <CardHeader className={'text-2xl'}>Your Stats!</CardHeader>
      <CardContent className={'flex flex-col gap-2'}>
        <div className={'text-xl text-muted-foreground'}>
          Current stage: {indexStage}
        </div>
        {/*<div className={'text-xl text-muted-foreground'}>*/}
        {/*  Current time: {time}*/}
        {/*</div>*/}
        <div className={'text-xl text-muted-foreground'}>
          Current score: 1000
        </div>
      </CardContent>
      <CardFooter className={'flex flex-col items-start'}>
        Did you know?
        <div className={'text-muted-foreground'}>
          Venus is the only planet in our solar system that rotates clockwise.
        </div>
      </CardFooter>
    </Card>
  );
};
