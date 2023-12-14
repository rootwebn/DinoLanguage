'use client';
import React from 'react';
import { PickingWordCard } from '@/entities/trainerLevel/ui/';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';
import { ListPrioritizedWords } from '@/entities/trainerLevel/ui/listPrioritizedWords';
import { RepeatWordsCard } from '@/entities/trainerLevel/ui/repeatWordsCard';
import { StatsInLevelCard } from '@/entities/trainerLevel/ui/statsInLevelCard';
import { useStatsLevel } from '@/entities/trainerLevel/model/useStatsLevel';
import { CheckKnowWords } from '@/entities/trainerLevel/ui/checkKnowWords';

export const FlashcardsRandomWords: React.FC = () => {
  const { stageFlash } = useFlashCheck();
  console.log('Current index stage', stageFlash);
  return (
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
      </div>
      <StatsInLevelCard />
    </div>
  );
};
