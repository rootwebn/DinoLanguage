'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useSaveContext } from '@/entities/trainerLevel/model/useSaveContext';
import { useTimerStorage } from '@/entities/trainerLevel/model/timerStorage';
import Link from 'next/link';

export const ResultLevelCard = () => {
  const statsLevel1Flash = useSaveContext((s) => s.statsLevel1Flash);

  return (
    <>
      <Card className={'bg-space'}>
        <CardHeader>YOUR RESULT OF LEVEL, YOU DID IT!</CardHeader>
        <CardContent className={'grid grid-cols-3 grid-rows-1 gap-4'}>
          {statsLevel1Flash.map((item) => {
            return (
              <div key={item.attemptId} className={'bg-lightSpace'}>
                <div>Your time: {item.time}</div>
                <div>Your attempt: {item.attemptId}</div>
              </div>
            );
          })}
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={'/trainers/flashcards/level-1/'}>
              Want to try again?
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
