import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useFlashCheck } from '@/entities/trainerLevel/model';
import { useStatsLevel } from '@/entities/trainerLevel/model/useStatsLevel';
import { useEffect } from 'react';

export const StatsInLevelCard = () => {
  const { stageFlash, score, scoreMultiplier } = useFlashCheck();
  const { useTimer, time, stopTimer, setCleanStatsStorage, setCleanTimer } =
    useStatsLevel();

  useTimer();

  useEffect(() => {
    setCleanStatsStorage();
    setCleanTimer();
  }, []);

  return (
    <Card className={'row-span-2 flex flex-col justify-around'}>
      <CardHeader className={'text-2xl'}>Your Stats!</CardHeader>
      <CardContent className={'flex flex-col gap-2'}>
        <div className={'text-xl text-muted-foreground'}>
          Current stage: {stageFlash}
        </div>
        <div className={'text-xl text-muted-foreground'}>
          Current time: {time}
        </div>
        <div className={'text-xl text-muted-foreground'}>
          Current score: {score}
        </div>
        <div className={'text-xl text-muted-foreground'}>
          Current score multiplier: {scoreMultiplier}
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
