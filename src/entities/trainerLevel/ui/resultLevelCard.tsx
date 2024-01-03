import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useBoundStore } from '@/entities/trainerLevel/model/boundStorage';
import { useEffect, useState } from 'react';
import { useSaveContext } from '@/entities/trainerLevel/model/useSaveContext';
import useTimer from '@/entities/trainerLevel/model/timer';
import { useTimerStorage } from '@/entities/trainerLevel/model/timerStorage';
import { useStagesStorage } from '@/entities/trainerLevel/model/stagesStorage';
import { useAttemptStore } from '@/entities/trainerLevel/model/attemptsStorage';

export const ResultLevelCard = () => {
  const {
    score,
    scoreMultiplier,
    streakAnswers,
    accuracyAnswers,
    rightAnswers,
    totalNumAnswers,
  } = useBoundStore();
  const setNewStats = useSaveContext((s) => s.setNewStats);
  const attemptId = useAttemptStore((state) => state.attemptIdFlash);
  const statsLevel1Flash = useSaveContext((s) => s.statsLevel1Flash);
  const time = useTimerStorage((state) => state.time);
  const stageFlash = useStagesStorage((state) => state.stageFlash);
  const [isSaved, setIsSaved] = useState(false);

  if (stageFlash === 5 && !isSaved) {
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
    setIsSaved(true);
  }

  return (
    <>
      <Card>
        <CardHeader>YOUR RESULT OF LEVEL, YOU DID IT!</CardHeader>
        <CardContent className={'grid grid-cols-3 grid-rows-3 gap-4 bg-space'}>
          <div className={'flex flex-col'}>
            {statsLevel1Flash.map((item) => {
              return (
                <div
                  key={item.attemptId}
                  className={'mt-2 border-4 bg-lightSpace'}
                >
                  {/*<div>Your score: {item.score}</div>*/}
                  {/*<div>Your multiplier:{item.scoreMultiplier}</div>*/}
                  {/*<div>Your attemptId: {item.attemptId}</div>*/}
                  {/*<div>Your accuracy: {item.accuracyAnswers}</div>*/}
                  {/*<div>Your total answers: {item.totalNumAnswers}</div>*/}
                  {/*<div>Your right answers: {item.rightAnswers}</div>*/}
                  <div>Your time: {item.time}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};
