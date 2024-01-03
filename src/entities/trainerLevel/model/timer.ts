// import { useState, useEffect } from 'react';
//
// type TimerHook = {
//   time: string;
//   setExactTime: (exactTime: string) => void;
//   startTimer: () => void;
//   stopTimer: () => void;
// };
//
// const useTimer = (): TimerHook => {
//   const [time, setTime] = useState<string>('00:00');
//   const [timerActive, setTimerActive] = useState<boolean>(true);
//
//   const formatTime = (seconds: number): string => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');
//     return `${formattedMinutes}:${formattedSeconds}`;
//   };
//
//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//
//     if (timerActive) {
//       const [minutes, seconds] = (time || '00:00').split(':').map(Number);
//       let totalSeconds = minutes * 60 + seconds;
//
//       interval = setInterval(() => {
//         totalSeconds++;
//         setTime(formatTime(totalSeconds));
//       }, 1000);
//     }
//
//     return () => clearInterval(interval);
//   }, [timerActive, time]);
//
//   const setExactTime = (exactTime: string): void => {
//     console.log('Timer was set to:', exactTime);
//     setTime(exactTime);
//   };
//
//   const startTimer = (): void => {
//     console.log('Started Timer.');
//     setTimerActive(true);
//   };
//
//   const stopTimer = (): void => {
//     console.log('Stopped Timer.');
//     setTimerActive(false);
//   };
//
//   const saveTimeStorage = () => {};
//
//   return {
//     time,
//     setExactTime,
//     startTimer,
//     stopTimer,
//   };
// };
//
// export default useTimer;
// useTimer.ts

import { useState, useEffect } from 'react';
import {
  useSetTimerStorage,
  useTimerStorage,
} from '@/entities/trainerLevel/model/timerStorage';

type TimerHook = {
  time: string;
  setExactTime: (exactTime: string) => void;
  startTimer: () => void;
  stopTimer: () => void;
  saveTime: () => void;
};

const useTimer = (
  initialTime: string,
  shouldStart: boolean = true,
): TimerHook => {
  const [initialTimeState, setInitialTimeState] = useState<string>(initialTime);
  const [time, setTime] = useState<string>(initialTime);
  const [timerActive, setTimerActive] = useState<boolean>(shouldStart);
  const setTimeStorage = useSetTimerStorage((state) => state.setTimeStorage);
  const timeStorage = useTimerStorage((state) => state.time);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive) {
      const [minutes, seconds] = time.split(':').map(Number);
      let totalSeconds = minutes * 60 + seconds;

      interval = setInterval(() => {
        totalSeconds++;
        setTime(formatTime(totalSeconds));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerActive, time]);

  const setExactTime = (exactTime: string): void => {
    setTime(exactTime);
  };

  const startTimer = (): void => {
    setTimerActive(true);
  };

  const stopTimer = (): void => {
    setTimerActive(false);
  };

  const saveTime = (): void => {
    setTimeStorage(time);
    console.log('Saved time in storage:', timeStorage);
  };

  return {
    time,
    setExactTime,
    startTimer,
    stopTimer,
    saveTime,
  };
};

export default useTimer;
