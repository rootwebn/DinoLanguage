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

export default function TrainersLevelSelectUI() {
  return (
    <Card
      className={
        'mb-6 ml-4 mr-4 mt-6 border-space bg-space lg:ml-0 lg:mr-0 lg:mt-4'
      }
    >
      <CardHeader>
        <CardTitle className={'text-silentWhite'}>
          Are you ready? Then, choose level and go ahead.
        </CardTitle>
        <CardDescription>
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
            'border-hippieBlue bg-hippieBlue hover:border-waikanaGrey hover:bg-waikanaGrey hover:transition hover:duration-300 hover:ease-in-out xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={'/'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>
                Level 1: Micro-Dino
              </CardTitle>
              <CardDescription className={'text-voodoo'}>
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
            'border-hippieBlue bg-hippieBlue hover:border-waikanaGrey hover:bg-waikanaGrey hover:transition hover:duration-300 hover:ease-in-out xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={'/'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>Level 2: Dino</CardTitle>
              <CardDescription className={'text-voodoo'}>
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
            'border-hippieBlue bg-hippieBlue hover:border-waikanaGrey hover:bg-waikanaGrey hover:transition hover:duration-300 hover:ease-in-out xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={'/'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>
                Level 3: Giga-Dino
              </CardTitle>
              <CardDescription className={'text-voodoo'}>
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
            'cursor-not-allowed border-hippieBlue bg-hippieBlue hover:border-thunderbird hover:bg-thunderbird hover:transition hover:duration-300 hover:ease-in-out xl:min-w-[200px] xl:max-w-[250px]'
          }
        >
          <Link href={''} className={'cursor-not-allowed'}>
            <CardHeader>
              <CardTitle className={'text-turmeric'}>
                Level 4: Prime-Dino
              </CardTitle>
              <CardDescription className={'text-voodoo'}>
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
}
