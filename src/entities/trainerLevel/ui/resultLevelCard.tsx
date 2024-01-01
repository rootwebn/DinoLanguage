import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useBoundStore } from '@/entities/trainerLevel/model/boundStorage';
import { useEffect } from 'react';
import { useSaveContext } from '@/entities/trainerLevel/model/useSaveContext';

export const ResultLevelCard = () => {
  const { score, scoreMultiplier, streakAnswers, attemptId, setAttemptId } =
    useBoundStore();
  const setNewStats = useSaveContext((s) => s.setNewStats);
  const statsLevel1Flash = useSaveContext((s) => s.statsLevel1Flash);

  useEffect(() => {
    setAttemptId();
    const streak = streakAnswers;
    const data = { score, scoreMultiplier, streak, attemptId };
    setNewStats(data);
    console.log('saved data of stats', statsLevel1Flash);
  }, []);

  return (
    <>
      <Card>
        <CardHeader>YOUR RESULT OF LEVEL, YOU DID IT!</CardHeader>
        <CardContent className={'grid grid-cols-3 grid-rows-3'}>
          {statsLevel1Flash.map((item) => {
            return (
              <div key={item.attemptId}>
                Your score: {item.score}&nbsp; Your multiplier:{' '}
                {item.scoreMultiplier}&nbsp; Your streak of correct answers:{' '}
                {item.streak}&nbsp; Your attemptId: {item.attemptId}
              </div>
            );
          })}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};
