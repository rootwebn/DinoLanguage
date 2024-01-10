'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import { FlashcardsTopicCard } from '@/entities/trainerLevel/ui/';
import { ClipboardList, Dices, Settings2 } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useSetStagesStorage } from '@/entities/trainerLevel/model/stagesStorage';
import { BoundStore } from '@/entities/trainerLevel/model/boundStorage';
import { useSetWordsStore } from '@/entities/trainerLevel/model/wordsStorage';
import {
  useSetTimerStorage,
  useTimerStorage,
} from '@/entities/trainerLevel/model/timerStorage';
import { useConfigContext } from '@/entities/trainerLevel/model/useConfigContext';
import { createConfigStorage } from '@/entities/trainerLevel/model/configFlashcardsStorage';

export const FlashcardsTopicSelect = () => {
  const setStageFlash = useSetStagesStorage((state) => state.setStageFlash);
  const prioritizeWord = useSetWordsStore((state) => state.prioritizeWord);
  const setWordsCleanStorage = useSetWordsStore(
    (state) => state.setCleanStorage,
  );
  const setTimeOver = useSetTimerStorage((s) => s.setTimerOver);
  const { setCleanStatsStorage } = BoundStore();

  useEffect(() => {
    setTimeOver(false);
    setCleanStatsStorage();
    setWordsCleanStorage();
    setStageFlash(1);
  }, [setStageFlash]);

  return (
    <>
      <Card className={'max-h-[620px] max-w-[1200px] bg-lightSpace'}>
        <CardHeader>
          <CardTitle>Pick up topic...</CardTitle>
          <CardDescription>
            We highly DO NOT recommend picking random topic due to low accuracy
            {/* eslint-disable-next-line react/no-unescaped-entities */}{' '}
            translation words and some bugs with API which we can't really fix.
          </CardDescription>
        </CardHeader>
        <CardContent
          className={
            'block flex max-h-[500px] w-full flex-row flex-row-reverse justify-end gap-6 overflow-y-scroll'
          }
        >
          <Card className={'bg-space'}>
            <CardHeader className={'flex flex-row items-center text-2xl'}>
              <ClipboardList className={'mr-0.5 min-w-[24px]'} />
              Catalog topics
            </CardHeader>
            <CardContent
              className={'grid grid-cols-3 grid-rows-1 gap-4 bg-space'}
            >
              <FlashcardsTopicCard
                titleCardTopic={'Custom Topic'}
                descCardTopic={
                  'You can create your very own set words and setup almost everything.'
                }
                iconCardTopic={<Settings2 className={'mr-0.5 min-w-[24px]'} />}
              />
              <FlashcardsTopicCard
                titleCardTopic={'Random Topic'}
                descCardTopic={
                  'Explore the Unpredictable: Random Topic Flashcards'
                }
                iconCardTopic={<Dices className={'mr-0.5 min-w-[24px]'} />}
              />
            </CardContent>
            <CardFooter className={'justify-between rounded-b-lg bg-space'}>
              <div>DinoLanguage 2024</div>
              Version: 1.0.0
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </>
  );
};
