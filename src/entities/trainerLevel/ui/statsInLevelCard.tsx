'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useFlashCheck } from '@/entities/trainerLevel/model';
import { useEffect } from 'react';
import { BoundStore } from '@/entities/trainerLevel/model/boundStorage';
import { useSaveContext } from '@/entities/trainerLevel/model/useSaveContext';
import useTimer from '@/entities/trainerLevel/model/timer';
import {
  useAttemptStore,
  useSetAttemptStore,
} from '@/entities/trainerLevel/model/attemptsStorage';
import { useSetTimerStorage } from '@/entities/trainerLevel/model/timerStorage';

export const StatsInLevelCard = () => {
  const { stageFlash } = useFlashCheck();
  const { time, startTimer, stopTimer, setExactTime } = useTimer(
    '00:00',
    false,
  );
  const {
    accuracyAnswers,
    totalNumAnswers,
    rightAnswers,
    score,
    scoreMultiplier,
  } = BoundStore();
  const setCleanStats = useSaveContext((s) => s.setCleanStats);
  const setNewStats = useSaveContext((s) => s.setNewStats);
  const setAttemptId = useSetAttemptStore((state) => state.setAttemptIdFlash);
  const attemptId = useAttemptStore((state) => state.attemptIdFlash);
  const setAttemptClean = useSetAttemptStore(
    (state) => state.setAttemptIdCleanFlash,
  );
  const setCleanTimeStorage = useSetTimerStorage(
    (state) => state.setCleanTimeStorage,
  );

  useEffect(() => {
    switch (stageFlash) {
      case 1:
        setCleanTimeStorage();
        break;
      case 2:
        setExactTime('00:05');
        setAttemptId();
        break;
      case 5:
        stopTimer();
        const data = {
          score,
          scoreMultiplier,
          attemptId,
          time,
          accuracyAnswers,
          rightAnswers,
          totalNumAnswers,
        };
        setNewStats(data);
        console.log('save system worked');
        break;
    }

    console.log('useEffect worked');
  }, [stageFlash]);

  return (
    <Card className={'row-span-2 flex flex-col justify-around bg-eclipseGray'}>
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
          Current attempt: {attemptId}
        </div>
        <div className={'text-xl text-muted-foreground'}>
          Current accuracy: {accuracyAnswers}%
        </div>
        <div className={'text-xl text-muted-foreground'}>
          Current total answers: {totalNumAnswers}
        </div>
        <div className={'text-xl text-muted-foreground'}>
          Current num right answers: {rightAnswers}
        </div>
        <div className={'grid grid-cols-2 gap-2'}>
          <Button
            onClick={() => setCleanStats()}
            className={'after:bg-lightSpace'}
          >
            Erase saves
          </Button>
          <Button onClick={stopTimer} className={'after:bg-lightSpace'}>
            Stop Timer
          </Button>
          <Button onClick={startTimer} className={'after:bg-lightSpace'}>
            Start Timer
          </Button>
          <Button
            onClick={() => setExactTime('00:00')}
            className={'after:bg-lightSpace'}
          >
            Set to 0 timer
          </Button>
          <Button onClick={setAttemptClean}>Set Attempts to 0</Button>
          <Button onClick={setCleanTimeStorage}>Set Time Storage to 0</Button>
        </div>
      </CardContent>
      <CardFooter className={'flex flex-col items-start'}>
        Did you know?
        <div className={'text-muted-foreground'}>
          Venus is the only planet in our solar system that rotates clockwise.
          Version: 1.0.0
        </div>
      </CardFooter>
    </Card>
  );
};
