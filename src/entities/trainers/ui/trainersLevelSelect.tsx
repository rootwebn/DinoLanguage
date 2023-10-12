import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/shared/ui/card';
import { Dice1, Dice2, Dice4, Dice6 } from 'lucide-react';
import Link from 'next/link';

export const TrainersLevelSelectUI = () => {
  return (
    <Card
      className={
        'mb-6 border-silentWhite bg-silentWhite dark:border-space dark:bg-space lg:col-span-2 lg:ml-0 lg:mr-0 lg:mt-0'
      }
    >
      <CardHeader>
        <CardTitle className={'text-flower dark:text-silentWhite'}>
          Are you ready? Then, choose level and go ahead.
        </CardTitle>
        <CardDescription className={'text-woodsmoke'}>
          Overall, there is 3 levels of difficult.
        </CardDescription>
      </CardHeader>
      <CardContent
        className={
          'flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8 xl:flex xl:flex-row xl:justify-around'
        }
      >
        <Card
          className={
            'border-mulledWine bg-mulledWine hover:border-waikanaGrey hover:bg-waikanaGrey hover:transition hover:duration-300 hover:ease-in-out dark:border-darkerHash dark:bg-darkerHash dark:hover:bg-hash xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={'/'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>
                Level 1: Micro-Dino
              </CardTitle>
              <CardDescription className={'text-mercury'}>
                First level, just to understand how it works. Level A1+
              </CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice1
                className={'min-h-[100px] min-w-[100px] max-w-[250px]'}
                color={'#000000'}
              />
            </CardContent>
          </Link>
        </Card>
        <Card
          className={
            'border-mulledWine bg-mulledWine hover:border-waikanaGrey hover:bg-waikanaGrey hover:transition hover:duration-300 hover:ease-in-out dark:border-darkerHash dark:bg-darkerHash dark:hover:bg-hash xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={'/'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>Level 2: Dino</CardTitle>
              <CardDescription className={'text-mercury'}>
                First hard challenge! The game just got harder! level A2-B1
              </CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice2
                color={'#000000'}
                className={
                  'max-h-[200px] min-h-[100px] min-w-[100px] max-w-[250px]'
                }
              />
            </CardContent>
          </Link>
        </Card>
        <Card
          className={
            'border-mulledWine bg-mulledWine hover:border-waikanaGrey hover:bg-waikanaGrey hover:transition hover:duration-300 hover:ease-in-out dark:border-darkerHash dark:bg-darkerHash dark:hover:bg-hash xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={'/'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>
                Level 3: Giga-Dino
              </CardTitle>
              <CardDescription className={'text-mercury'}>
                Truly hard challenge for level B2+
              </CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice4
                className={'min-h-[100px] min-w-[100px] max-w-[250px]'}
                color={'#000000'}
              />
            </CardContent>
          </Link>
        </Card>
        <Card
          className={
            'cursor-not-allowed border-mulledWine bg-mulledWine hover:border-thunderbird hover:bg-thunderbird hover:transition hover:duration-300 hover:ease-in-out dark:border-darkerHash dark:bg-darkerHash dark:hover:border-stiletto dark:hover:bg-stiletto xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={''} className={'cursor-not-allowed'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>
                Level 4: Prime-Dino
              </CardTitle>
              <CardDescription className={'text-mercury'}>
                You cant beat this level. Actually, even play.
              </CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice6
                className={'min-h-[100px] min-w-[100px]'}
                color={'#000000'}
              />
            </CardContent>
          </Link>
        </Card>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
