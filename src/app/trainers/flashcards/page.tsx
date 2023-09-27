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

export default function FlashcardTrainerPage() {
  return (
    <Card className={'mb-6 ml-32 mr-32 mt-6'}>
      <CardHeader>
        <CardTitle>Are you ready? Then, choose level and go ahead.</CardTitle>
        <CardDescription>
          Overall, there is 3 levels of difficult.
        </CardDescription>
      </CardHeader>
      <CardContent className={'flex flex-row justify-around'}>
        <Card>
          <Link href={'/'}>
            <CardHeader>
              <CardTitle>Level 1: Micro-Dino</CardTitle>
              <CardDescription>First level, not so hard.</CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice1 className={'min-h-[100px] min-w-[100px]'} />
            </CardContent>
          </Link>
        </Card>
        <Card className={'min-w-[250px]'}>
          <Link href={'/'}>
            <CardHeader>
              <CardTitle>Level 2: Dino</CardTitle>
              <CardDescription>
                A little bit harder, level A2-B1
              </CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice2 className={'min-h-[100px] min-w-[100px]'} />
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href={'/'}>
            <CardHeader>
              <CardTitle>Level 3: Giga-Dino</CardTitle>
              <CardDescription>
                Truly hard challenge for level B2+
              </CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice4 className={'min-h-[100px] min-w-[100px]'} />
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href={'/'}>
            <CardHeader>
              <CardTitle>Level 4: Prime-Dino</CardTitle>
              <CardDescription>
                You cant beat this level. Actually, even play.
              </CardDescription>
            </CardHeader>
            <CardContent className={'flex items-center justify-center'}>
              <Dice6 className={'min-h-[100px] min-w-[100px]'} />
            </CardContent>
          </Link>
        </Card>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
