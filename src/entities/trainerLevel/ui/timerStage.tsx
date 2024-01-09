import { Card } from '@/shared/ui';
import useTimer from '@/entities/trainerLevel/model/timer';
import { useEffect } from 'react';

export const TimerStage = () => {
  const { time, startTimer, stopTimer } = useTimer('00:30', true);

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Card className={'mt-2 max-w-[4%] bg-eclipseGray p-1'}>
      <div>{time}</div>
    </Card>
  );
};
