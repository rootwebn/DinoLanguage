import { useEffect } from 'react';
import {
  useSetTimerStorage,
  useTimerStorage,
} from '@/entities/trainerLevel/model/timerStorage';
import { useBoundStore } from '@/entities/trainerLevel/model/boundStorage';

export const useStatsLevel = () => {
  const { setCleanStatsStorage } = useBoundStore();
  const setCleanTimer = useSetTimerStorage((state) => state.setCleanTimer);
  const setTimer = useSetTimerStorage((state) => state.setTimer);
  const time = useTimerStorage((state) => state.time);

  //ToDo Refactor timer and separate timer to another file and component
  const useTimer = () => {
    useEffect(() => {
      const timer = setInterval(() => {
        const [minutes, seconds] = time.split(':').map(Number);
        const newSeconds = seconds === 59 ? 0 : seconds + 1;
        const newMinutes = seconds === 59 ? minutes + 1 : minutes;
        const formattedTime = `${String(newMinutes).padStart(2, '0')}:${String(
          newSeconds,
        ).padStart(2, '0')}`;
        setTimer(formattedTime);
      }, 1000);

      return () => clearInterval(timer);
    }, [time]);
  };

  const stopTimer = () => {
    setTimer('00:00');
  };

  return {
    time,
    setTimer,
    setCleanStatsStorage,
    setCleanTimer,
    stopTimer,
    useTimer,
  };
};
