'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Skeleton,
} from '@/shared/ui';
import { useEffect, useState } from 'react';
import { BoundStore } from '@/shared/helpers/boundStorage';
import useTimer from '@/entities/trainerLevel/model/timer';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';

export const StatsInLevelCard = () => {
  const { time, stopTimer } = useTimer('00:00', false);
  const [isMountedStats, setIsMountedStats] = useState<boolean>(false);
  const {
    setCleanTimeStorage,
    score,
    scoreMultiplier,
    accuracyAnswers,
    rightAnswers,
    totalAnswers,
    stageFlash,
    setExactWordIndex,
  } = BoundStore();
  const { setAttemptIdFlash, attemptIdFlash, setNewStats } =
    PersistBoundStore();

  useEffect(() => {
    switch (stageFlash) {
      case 1:
        setCleanTimeStorage();
        break;
      case 2:
        setAttemptIdFlash();
        setExactWordIndex(0);
        break;
      case 3:
        setExactWordIndex(0);
        break;
      case 4:
        setExactWordIndex(0);
        break;
      case 5:
        stopTimer();
        const data = {
          score,
          scoreMultiplier,
          attemptIdFlash,
          time,
          accuracyAnswers,
          rightAnswers,
          totalAnswers,
        };
        setNewStats(data);
        console.log('save system worked');
        break;
    }
    console.log('useEffect worked');
  }, [stageFlash]);

  useEffect(() => {
    setIsMountedStats(true);
  }, []);

  return (
    <Card className={'row-span-2 flex flex-col justify-around bg-eclipseGray'}>
      {isMountedStats ? (
        <>
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
            <div className={'text-xl text-muted-foreground'}>
              Current attempt: {attemptIdFlash}
            </div>
            <div className={'text-xl text-muted-foreground'}>
              Current accuracy: {accuracyAnswers}%
            </div>
            <div className={'text-xl text-muted-foreground'}>
              Current total answers: {totalAnswers}
            </div>
            <div className={'text-xl text-muted-foreground'}>
              Current num right answers: {rightAnswers}
            </div>
          </CardContent>
          <CardFooter className={'flex flex-col items-start'}>
            Did you know?
            <div className={'text-muted-foreground'}>
              Venus is the only planet in our solar system that rotates
              clockwise. Version: 1.0.0
            </div>
          </CardFooter>
        </>
      ) : (
        <Skeleton />
      )}
    </Card>
  );
};
