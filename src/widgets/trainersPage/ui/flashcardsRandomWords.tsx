'use client';
import React from 'react';
import { PickingWordCard } from '@/entities/trainerLevel/ui/';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';
import { ListPrioritizedWords } from '@/entities/trainerLevel/ui/listPrioritizedWords';
import { RepeatWordsCard } from '@/entities/trainerLevel/ui/repeatWordsCard';
import { StatsInLevelCard } from '@/entities/trainerLevel/ui/statsInLevelCard';
import { useStatsLevel } from '@/entities/trainerLevel/model/useStatsLevel';

export const FlashcardsRandomWords: React.FC = () => {
  const { indexStage } = useFlashCheck();
  console.log('Current index stage', indexStage);
  return (
    <div
      className={
        'lg:ml-10 lg:mr-10 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-4 2xl:ml-32 2xl:mr-32 2xl:mt-14'
      }
    >
      <div className={'col-span-2 row-span-2'}>
        {indexStage === 0 && <PickingWordCard />}
        {indexStage === 1 && <ListPrioritizedWords />}
        {indexStage === 2 && <RepeatWordsCard />}
      </div>
      <StatsInLevelCard />
    </div>
  );
};
