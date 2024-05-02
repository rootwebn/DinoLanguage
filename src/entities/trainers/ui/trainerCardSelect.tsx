import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import { Dice1 } from 'lucide-react';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BoundStore } from '@/shared/helpers/boundStorage';
import React from 'react';

interface TrainerCardInterface {
  titleCard: string;
  descCard: string;
  imgCard: JSX.Element;
  handlerCard: () => void;
}

export const TrainerCardSelect: React.FC<TrainerCardInterface> = ({
  titleCard,
  imgCard,
  descCard,
  handlerCard,
}) => {
  return (
    <Card
      onClick={handlerCard}
      className={
        'border-mulledWine bg-mulledWine hover:border-waikanaGrey hover:bg-waikanaGrey hover:transition hover:duration-300 hover:ease-in-out dark:border-darkerHash dark:bg-darkerHash dark:hover:bg-hash'
      }
    >
      <CardHeader className={'flex flex-col'}>
        <CardTitle className={'text-turmeric'}>{titleCard}</CardTitle>
        <CardDescription className={'flex flex-row gap-1   text-mercury'}>
          {imgCard}
          {descCard}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
