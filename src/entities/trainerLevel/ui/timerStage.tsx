import { Card } from '@/shared/ui';
import useTimer from '@/entities/trainerLevel/model/timer';
import { useEffect } from 'react';
import { useConfigContext } from '@/entities/trainerLevel/model/useConfigContext';

export const TimerStage = () => {
  const timeOnStage = useConfigContext((s) => s.timeOnStage);
  const { time, startTimer } = useTimer(`00:${timeOnStage.toString()}`, true);

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Card className={'mt-2 max-w-[4%] bg-eclipseGray p-1'}>
      <div>{time}</div>
    </Card>
  );
};
