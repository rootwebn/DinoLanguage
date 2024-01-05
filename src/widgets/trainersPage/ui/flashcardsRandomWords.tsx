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

export const FlashcardsRandomWords: React.FC = () => {
  const { stageFlash } = useFlashCheck();
  console.log('Current index stage', stageFlash);

  const store = useRef(createSaveStorage()).current;
  return (
    <SaveContext.Provider value={store}>
      <div
        className={
          'lg:ml-10 lg:mr-10 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-4 2xl:ml-32 2xl:mr-32 2xl:mt-14'
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
    </SaveContext.Provider>
  );
};
