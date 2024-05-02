import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Accordion } from '@/shared/ui/accordion';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { AccordionItemCard } from '@/entities/trainers/ui/components';
import React from 'react';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { possibleGameModes } from '@/shared/helpers/consts';
import { BoundStore } from '@/shared/helpers/boundStorage';

interface PageCardInterface {
  titleCard: string;
  descCard: string;
  footerBtnGame: string;
  btnGameMode: (typeof possibleGameModes)[number];
  footerBtnGameHref: string;
  footerBtnStatsHref: string;
  footerBtnStats: string;
  iconSrc: JSX.Element;
}

export const PageCard: React.FC<PageCardInterface> = ({
  titleCard,
  descCard,
  footerBtnStats,
  footerBtnGameHref,
  footerBtnStatsHref,
  footerBtnGame,
  btnGameMode,
  iconSrc,
}) => {
  const { setUserGameMode } = PersistBoundStore();
  const {
    setStageFlash,
    setStageBrain,
    setCleanTimeStorage,
    setCleanStatsStorage,
    loadWords,
  } = BoundStore();
  const handler = (btnGameMode: (typeof possibleGameModes)[number]) => {
    setStageFlash(0);
    setStageBrain(0);
    setCleanTimeStorage();
    setCleanStatsStorage();
    loadWords(5, 5);
    setUserGameMode(btnGameMode);
  };

  return (
    <Card className={'mb-6 mt-6 border-space bg-space'}>
      <CardHeader>
        <CardTitle className={'flex flex-row text-stiletto'}>
          <div>{iconSrc}</div>
          {titleCard}
        </CardTitle>
        <CardDescription className={'text-veniceBlue'}>
          {descCard}
        </CardDescription>
      </CardHeader>
      <CardContent className={''}>
        <Accordion type={'multiple'}>
          <AccordionItemCard
            itemValue={'item-1'}
            itemTriggerTitle={'Step 1: Explore Flashcard Categories'}
            itemContentDesc={
              'Browse through a variety of flashcard categories, each tailored to different topics and language aspects. Choose a category that aligns with your learning goals and interests.'
            }
          />
          <AccordionItemCard
            itemValue={'item-2'}
            itemTriggerTitle={'Step 2: Start Flashcard Learning'}
            itemContentDesc={
              'Click on your selected flashcard category to begin. You will see a flashcard with a word, phrase, or sentence in your target language.'
            }
          />
          <AccordionItemCard
            itemValue={'item-3'}
            itemTriggerTitle={'Step 3: Understand and Memorize'}
            itemContentDesc={
              'Carefully read and understand the content on the flashcard. Repeat the word or phrase in your mind to help with memorization.'
            }
          />
          <AccordionItemCard
            itemValue={'item-4'}
            itemTriggerTitle={'Step 4: Review and Repeat'}
            itemContentDesc={
              'Continue flipping through the flashcards in your chosen category. Review and repeat as necessary to reinforce your memory and understanding.'
            }
          />
        </Accordion>
      </CardContent>
      <CardFooter className={'flex flex-row justify-between'}>
        <Button
          onClick={() => handler(btnGameMode)}
          variant={'outline'}
          className={
            'border-darkerHash bg-darkerHash text-white hover:border-hash hover:bg-hash'
          }
          asChild
        >
          <Link href={`${footerBtnGameHref}`}>{footerBtnGame}</Link>
        </Button>
        <Button
          variant={'outline'}
          className={
            'border-darkerHash bg-darkerHash text-white hover:border-hash hover:bg-hash'
          }
          asChild
        >
          <Link href={`${footerBtnStatsHref}`}>{footerBtnStats}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
