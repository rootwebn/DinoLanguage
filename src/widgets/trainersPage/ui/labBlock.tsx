import { WordInfoCard } from '@/entities/lab/ui/wordInfoCard';
import { PickWordCard } from '@/entities/lab/ui/pickWordCard';
import { CustomListWords } from '@/entities/lab/ui/customListWords';
import React from 'react';
import { PresetsWordsList } from '@/entities/lab/ui/presetsWordsList';
export const LabBlock: React.FC = () => {
  return (
    <div className={'flex flex-row items-center justify-center gap-4'}>
      <div className={'ml-32 mr-32 mt-6 grid grid-cols-6 grid-rows-2 gap-4'}>
        <PickWordCard />
        <CustomListWords />
        <PresetsWordsList />
      </div>
    </div>
  );
};
