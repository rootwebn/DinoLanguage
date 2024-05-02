'use client';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { Dice1, Dice2, Dice4, Dice6, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/shared/ui';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { TrainerCardSelect } from '@/entities/trainers/ui/trainerCardSelect';
import { FlashcardsTopicCard } from '@/entities/settings/flashcardsTopicCard';
import React from 'react';
import { possibleGameLevels } from '@/shared/helpers';

export const TrainersLevelSelectUI = () => {
  const { setUserSelectLevel, userGameMode } = PersistBoundStore();
  const { setStageFlash, setStageBrain } = BoundStore();

  const handlerButtonLevelSelect = (
    levelSelect: (typeof possibleGameLevels)[number],
  ) => {
    setUserSelectLevel(levelSelect);
    if (userGameMode === 'brainstorm') {
      setStageBrain(1);
    } else {
      setStageFlash(1);
    }
  };

  return (
    <Card
      className={
        'mb-6 border-silentWhite bg-silentWhite dark:border-space dark:bg-space lg:col-span-2 lg:ml-0 lg:mr-0 lg:mt-0'
      }
    >
      <CardHeader></CardHeader>
      <CardContent
        className={
          'flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 xl:grid xl:grid-cols-4 xl:grid-rows-2'
        }
      >
        <TrainerCardSelect
          titleCard={'Level 1: Micro-Dino'}
          descCard={'The Basics. Easy way to play.'}
          imgCard={
            <Dice1
              color={'#000000'}
              className={
                'max-h-[200px] min-h-[35px] min-w-[35px] max-w-[250px]'
              }
            />
          }
          handlerCard={() => handlerButtonLevelSelect('l1')}
        />

        <TrainerCardSelect
          titleCard={'Level 2: Regular One'}
          descCard={'The game just got harder!'}
          imgCard={
            <Dice2
              color={'#000000'}
              className={
                'max-h-[200px] min-h-[35px] min-w-[35px] max-w-[250px]'
              }
            />
          }
          handlerCard={() => handlerButtonLevelSelect('l2')}
        />

        <TrainerCardSelect
          titleCard={'Level 3: Giga-Dino'}
          descCard={'Truly hard challenge...'}
          imgCard={
            <Dice4
              color={'#000000'}
              className={
                'max-h-[200px] min-h-[35px] min-w-[35px] max-w-[250px]'
              }
            />
          }
          handlerCard={() => handlerButtonLevelSelect('l3')}
        />

        <TrainerCardSelect
          titleCard={'Level 4: Prime-Dino'}
          descCard={'You cant beat this level.'}
          imgCard={
            <Dice6
              color={'#000000'}
              className={
                'max-h-[200px] min-h-[35px] min-w-[35px] max-w-[250px]'
              }
            />
          }
          handlerCard={() => handlerButtonLevelSelect('l4')}
        />

        <FlashcardsTopicCard
          classNameCard={'col-start-3 col-end-5 row-start-1'}
          titleCardTopic={'Custom Topic'}
          descCardTopic={'You can create your very own set words.'}
          iconCardTopic={<Settings2 className={'mr-0.5 min-w-[24px]'} />}
          customListWords={true}
        />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
