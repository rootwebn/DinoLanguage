import { Card } from '@/shared/ui';
import useTimer from '@/entities/trainerLevel/model/timer';
import { useEffect } from 'react';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BoundStore } from '@/shared/helpers/boundStorage';

export const TimerStage = () => {
  const { timeOnStage } = PersistBoundStore();
  const { stageFlash } = BoundStore();
  const { time, startTimer, setExactTime, stopTimer } = useTimer(
    `00:${timeOnStage.toString()}`,
    true,
  );

  useEffect(() => {
    if (stageFlash === 1) {
      setExactTime(`00:${timeOnStage.toString()}`);
      startTimer();
    }
    if (stageFlash === 2) {
      setExactTime(`00:${timeOnStage.toString()}`);
    }
    if (stageFlash === 3) {
      setExactTime(`00:${timeOnStage.toString()}`);
    }
    if (stageFlash === 4) {
      setExactTime(`00:${timeOnStage.toString()}`);
    }
    if (stageFlash === 5) {
      stopTimer();
    }
  }, [stageFlash]);

  return (
    <Card className={'mb-0.5 mt-2 bg-eclipseGray p-1'}>
      <div>{time}</div>
    </Card>
  );
};
