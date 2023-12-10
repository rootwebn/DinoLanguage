import { useEffect } from 'react';
import {
  useSetStatsStorage,
  useStatsStorage,
} from '@/entities/trainerLevel/model/statsStorage';

export const useStatsLevel = () => {
  const time = useStatsStorage((state) => state.time);
  const setTimer = useSetStatsStorage((state) => state.setTimer);
  const score = useStatsStorage((state) => state.score);
  const setScore = useSetStatsStorage((state) => state.setScore);

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

  return {
    time,
    score,
    setScore,
    setTimer,
    useTimer,
  };
};
