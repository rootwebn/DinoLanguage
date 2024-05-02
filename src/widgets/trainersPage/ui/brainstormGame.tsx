import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import { BoundStore } from '@/shared/helpers/boundStorage';
import {
  ListPrioritizedWords,
  PickingWordCard,
  RepeatWordsCard,
  ResultLevelCard,
  StatsInLevelCard,
} from '@/entities/trainerLevel';
import { BrainstormCycle } from '@/entities/trainerLevel/ui/brainstormCycle';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { TrainersLevelSelectUI } from '@/entities/trainers';
import React from 'react';
import { ShowKeyAnswers } from '@/entities/testingPanels/showKeyAnswers';

export const BrainstormGame = () => {
  const {
    stageBrain,
    setStageBrain,
    wordIndex,
    prioritizedWords,
    gameChallenge,
    translatedWordsRes,
  } = BoundStore();
  const { userSelectLevel } = PersistBoundStore();

  return (
    <Card
      className={
        'mt-4 grid gap-1 bg-lightSpace uxs:ml-4 uxs:mr-4 md:ml-6 md:mr-6 lg:ml-16 lg:mr-16 2xl:ml-52 2xl:mr-52'
      }
    >
      <CardHeader>
        <CardTitle>
          {stageBrain === 0 && 'This is start of your brainstorm.'}
          {stageBrain > 1 && stageBrain !== 5 && ''}
          {stageBrain === 5 && 'Congratulation!'}
        </CardTitle>
        <CardDescription>
          {stageBrain === 0 && 'Choose mode or level below!'}
          {stageBrain > 1 && stageBrain !== 5 && ''}
          {stageBrain === 5 && 'Lucky you! You completed game!'}
        </CardDescription>
      </CardHeader>
      <CardContent className={'grid grid-cols-3 gap-4'}>
        <div className={'col-span-3'}>
          {stageBrain === 0 && <TrainersLevelSelectUI />}
        </div>
        <div className={'col-span-2 row-start-1'}>
          {stageBrain === 1 && userSelectLevel !== 'customL' && (
            <PickingWordCard />
          )}
          {stageBrain === 2 && userSelectLevel !== 'customL' && (
            <ListPrioritizedWords />
          )}
          {stageBrain === 3 && <RepeatWordsCard />}
          {stageBrain === 4 && <BrainstormCycle />}
          {stageBrain === 5 && <ResultLevelCard />}
        </div>
        {stageBrain >= 1 && (
          <ShowKeyAnswers classNameCard={'col-start-1 col-end-3 row-start-2'} />
        )}
        {stageBrain >= 1 && <StatsInLevelCard />}
      </CardContent>
      <CardFooter className={'flex flex-row gap-4'}>
        <div>Current stage flashcards: {stageBrain}</div>
        <div>Word index: {wordIndex}</div>
        <div>Current game mode: {gameChallenge}</div>
        <div>
          Current translated: {translatedWordsRes.translatedWords[wordIndex]}
        </div>
      </CardFooter>
    </Card>
  );
};
