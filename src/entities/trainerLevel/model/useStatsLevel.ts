import { useEffect } from 'react';
import {
  useTimerStorage,
  useSetTimerStorage,
} from '@/entities/trainerLevel/model/timerStorage';

export const useStatsLevel = () => {
  const time = useTimerStorage((state) => state.time);
  const setTimer = useSetTimerStorage((state) => state.setTimer);

  const useTimer = () => {
    useEffect(() => {
      setTimer(time);
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

  return {
    time,
    setTimer,
    // useTimer,
  };
};
