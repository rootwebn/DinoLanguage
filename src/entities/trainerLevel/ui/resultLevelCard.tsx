'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import Link from 'next/link';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import useTimer from '@/entities/trainerLevel/model/timer';

export const ResultLevelCard = () => {
  const { statsLevel1Flash, setInitialSaves, setAttemptIdCleanFlash } =
    PersistBoundStore();
  const { stopTimer, startTimer, setExactTime } = useTimer('', false);

  return (
    <Card className={'bg-space'}>
      <CardHeader>
        YOUR RESULT OF LEVEL, YOU DID IT! Below all your previous result:
      </CardHeader>
      <div className={'block max-h-[300px] overflow-y-scroll '}>
        <CardContent className={'grid grid-cols-3 grid-rows-1 gap-4'}>
          {statsLevel1Flash.map((item) => {
            return (
              <Card key={item.attemptIdFlash} className={'bg-eclipseGray'}>
                <CardContent className={'mt-4'}>
                  <div>Accuracy answers: {item.accuracyAnswers}%</div>
                  <div>Time: {item.time}</div>
                  <div>Multiplier: {item.scoreMultiplier}</div>
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </div>
      <CardFooter className={'grid grid-cols-4 grid-rows-1 gap-4'}>
        <Button asChild>
          <Link href={'/trainers/flashcards/level-1/'}>Want to try again?</Link>
        </Button>
        <Button
          onClick={() => setInitialSaves()}
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
        <Button onClick={setAttemptIdCleanFlash}>Set Attempts to 0</Button>
      </CardFooter>
    </Card>
  );
};
