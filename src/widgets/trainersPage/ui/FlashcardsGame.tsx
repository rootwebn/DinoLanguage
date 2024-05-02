import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/shared/ui';
import { TrainersLevelSelectUI } from '@/entities/trainers';
import { FlashcardsRandomWords } from '@/widgets/trainersPage/ui/flashcardsRandomWords';
import React, { useEffect, useState } from 'react';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { useFlashCheck } from '@/entities/trainerLevel/model';

export const FlashcardsGame = () => {
  const {
    userRole,
    setUserRole,
    deleteUserRole,
    setCleanConfig,
    userSelectLevel,
    userGameMode,
  } = PersistBoundStore();
  const { stageFlash } = BoundStore();
  const [isMounted, setIsMounted] = useState(false);
  const { loadWords } = useFlashCheck();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card
      className={
        'mt-4 grid gap-1 bg-lightSpace uxs:ml-4 uxs:mr-4 md:ml-6 md:mr-6 lg:ml-16 lg:mr-16 2xl:ml-52 2xl:mr-52'
      }
    >
      <CardHeader>
        <CardTitle>
          {stageFlash === 0 && 'This is start of your game.'}
          {stageFlash > 1 && stageFlash !== 5 && ''}
          {stageFlash === 5 && 'Congratulation!'}
        </CardTitle>
        <CardDescription>
          {stageFlash === 0 &&
            'Choose below variant and you should be lock & load and ready to go.'}
          {stageFlash > 1 && stageFlash !== 5 && ''}
          {stageFlash === 5 && 'Lucky you! You completed game!'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isMounted ? (
          <>
            {userRole.includes('story') && stageFlash === 0 && (
              <TrainersLevelSelectUI />
            )}
            {stageFlash >= 3 && userSelectLevel === 'customL' && (
              <FlashcardsRandomWords />
            )}
            {stageFlash >= 1 && userSelectLevel === 'l1' && (
              <FlashcardsRandomWords />
            )}
            <div>Current stage flashcards: {stageFlash}</div>
            <div>Current user picked mode: {userGameMode}</div>
            {/*<div>Current user picked role: {userRole}</div>*/}
            {/*<div>Current user picked level: {userSelectLevel}</div>*/}
          </>
        ) : (
          <Skeleton className={'h-auto w-auto'} />
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
