'use client';
import React, { useEffect, useState } from 'react';
import {
  CheckKnowWords,
  ListPrioritizedWords,
  PickingWordCard,
  RepeatWordsCard,
  ResultLevelCard,
  StatsInLevelCard,
} from '@/entities/trainerLevel/ui/';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';
import { ShowKeyAnswers } from '@/entities/testingPanels/showKeyAnswers';
import { TimerStage } from '@/entities/trainerLevel/ui/timerStage';
import { Button, Skeleton } from '@/shared/ui';
import Link from 'next/link';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
export const FlashcardsRandomWords: React.FC = () => {
  const {
    setStageFlash,
    timeOver,
    stageFlash,
    setCleanTimeStorage,
    setCleanStatsStorage,
  } = BoundStore();
  const { peacefulMode } = PersistBoundStore();
  const [isMounted, setIsMounted] = useState(false);
  const { loadWords } = useFlashCheck();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {!timeOver ? (
        <>
          <div className={'flex justify-center'}>
            {isMounted ? (
              peacefulMode ? null : (
                <TimerStage />
              )
            ) : (
              <Skeleton className={'mt-2 h-8 w-12'} />
            )}
          </div>
          <div
            className={
              'lg:ml-10 lg:mr-10 lg:mt-12 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 2xl:mb-0 2xl:ml-0 2xl:mr-0 2xl:mt-2'
            }
          >
            <div className={'col-span-2 row-span-2'}>
              {stageFlash === 1 && <PickingWordCard />}
              {stageFlash === 2 && <ListPrioritizedWords />}
              {stageFlash === 3 && <RepeatWordsCard />}
              {stageFlash === 4 && <CheckKnowWords />}
              {stageFlash === 5 && <ResultLevelCard />}
              <ShowKeyAnswers />
            </div>
            <StatsInLevelCard />
          </div>
        </>
      ) : (
        <div className={'flex flex-col items-center justify-center text-2xl'}>
          Time is over. YOU DIED.
          <div className={'flex flex-col'}>
            But hey, you can try again! And die again. Maybe.
            <Button asChild>
              <Link href={'/trainers/flashcards/level-1/'}>
                Want to try again?
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
