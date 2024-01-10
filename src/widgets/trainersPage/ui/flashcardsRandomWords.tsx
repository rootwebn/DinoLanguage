'use client';
import React, { useRef } from 'react';
import {
  CheckKnowWords,
  ListPrioritizedWords,
  PickingWordCard,
  RepeatWordsCard,
  ResultLevelCard,
  StatsInLevelCard,
} from '@/entities/trainerLevel/ui/';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';
import {
  createSaveStorage,
  SaveContext,
} from '@/entities/trainerLevel/model/savedResultsStorage';
import { ShowKeyAnswers } from '@/entities/trainerLevel/ui/showKeyAnswers';
import {
  ConfigContext,
  createConfigStorage,
} from '@/entities/trainerLevel/model/configFlashcardsStorage';
import { TimerStage } from '@/entities/trainerLevel/ui/timerStage';
import useTimer from '@/entities/trainerLevel/model/timer';
import { useTimerStorage } from '@/entities/trainerLevel/model/timerStorage';
import { Button } from '@/shared/ui';
import Link from 'next/link';
import { useConfigContext } from '@/entities/trainerLevel/model/useConfigContext';
export const FlashcardsRandomWords: React.FC = () => {
  const { stageFlash } = useFlashCheck();
  console.log('Current index stage', stageFlash);
  const store = useRef(createSaveStorage()).current;
  const storeConfig = useRef(createConfigStorage()).current;
  const timeOver = useTimerStorage((s) => s.timeOver);
  const peacefulMode = useConfigContext((s) => s.peacefulMode);
  console.log('peacefulMode state', peacefulMode);

  return (
    <SaveContext.Provider value={store}>
      {!timeOver ? (
        <>
          <div className={'flex justify-center'}>
            {peacefulMode ? null : <TimerStage />}
          </div>
          <div
            className={
              'lg:ml-10 lg:mr-10 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-4 2xl:mb-14 2xl:ml-32 2xl:mr-32 2xl:mt-2'
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
    </SaveContext.Provider>
  );
};
