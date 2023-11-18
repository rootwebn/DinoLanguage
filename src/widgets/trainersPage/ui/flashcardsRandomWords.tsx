'use client';
import React from 'react';
import {
  PickingWordCard,
  RepeaterWordsBlock,
} from '@/entities/trainerLevel/ui/';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';

export const FlashcardsRandomWords: React.FC = () => {
  const { prioritizedWords, targetPrioritizedCount } = useFlashCheck();

  return (
    <div className={'flex min-h-[85vh] items-center justify-center'}>
      {prioritizedWords.length === targetPrioritizedCount ? (
        <RepeaterWordsBlock />
      ) : (
        <PickingWordCard />
      )}
    </div>
  );
};
