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
  //! fix double call of useEffect on 3 stage
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
    stageBrain,
    setExactWordIndex,
  } = BoundStore();
  const {
    setAttemptIdFlash,
    attemptIdFlash,
    setAttemptIdBrain,
    setNewStats,
    userGameMode,
    setNewBrainStats,
    attemptIdBrain,
  } = PersistBoundStore();

  useEffect(() => {
    switch (stageFlash) {
      case 1:
        setCleanTimeStorage();
        break;
      case 2:
        setExactWordIndex(0);
        break;
      case 3:
        setExactWordIndex(0);
        break;
      case 4:
        setAttemptIdFlash();
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
        console.log('save flash system worked');
        break;
    }

    console.log('useEffect worked');
  }, [stageFlash]);

  // useEffect(() => {
  //   switch (stageBrain) {
  //     case 1:
  //       setCleanTimeStorage();
  //       break;
  //     case 2:
  //       setExactWordIndex(0);
  //       break;
  //     case 3:
  //       setExactWordIndex(0);
  //       break;
  //     case 4:
  //       setAttemptIdBrain();
  //       setExactWordIndex(0);
  //       break;
  //     case 5:
  //       stopTimer();
  //       const data = {
  //         score,
  //         scoreMultiplier,
  //         attemptIdBrain,
  //         time,
  //         accuracyAnswers,
  //       };
  //       setNewBrainStats(data);
  //       console.log('save brain system worked');
  //       break;
  //   }
  // }, [stageBrain]);

  useEffect(() => {
    setIsMountedStats(true);
  }, []);

  return (
    <Card
      className={
        'col-start-3 col-end-4 row-start-1 row-end-3 flex flex-col justify-around bg-eclipseGray'
      }
    >
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
            {userGameMode === 'flashcards' ? (
              <div className={'text-xl text-muted-foreground'}>
                Current score multiplier: {scoreMultiplier}
              </div>
            ) : (
              ''
            )}
            {userGameMode === 'brainstorm' ? (
              <div className={'text-xl text-muted-foreground'}>
                Current attempt: {attemptIdBrain}
              </div>
            ) : (
              <div className={'text-xl text-muted-foreground'}>
                Current attempt: {attemptIdFlash}
              </div>
            )}

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
              clockwise.
            </div>
          </CardFooter>
        </>
      ) : (
        <Skeleton />
      )}
    </Card>
  );
};
