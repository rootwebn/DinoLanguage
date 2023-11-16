'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/shared/ui';
import ImgAlt1 from '../../../../public/LogoAlt1.png';
import Image from 'next/image';
import Link from 'next/link';

export const TopicSelect = () => {
  return (
    <Card className={'bg-space'}>
      <CardHeader>
        <CardTitle>Pick up topic...</CardTitle>
        <CardDescription>Other modes will appear soon</CardDescription>
      </CardHeader>
      <CardContent className={'flex flex-row gap-4'}>
        <Card className={'bg-lightSpace'}>
          <Link href={'/trainers/flashcards/level-1/random-topic'}>
            <CardHeader>
              <CardTitle>Let God of Random choose!</CardTitle>
            </CardHeader>
            <CardContent className={'flex flex-col items-center'}>
              <Image
                src={
                  'https://media.tenor.com/rAHG9xNcLKoAAAAC/dice-spinning.gif'
                }
                alt={''}
                height={150}
                width={150}
              />
              Pick up random topic of words
            </CardContent>
          </Link>
        </Card>
        <Card className={'bg-lightSpace'}>
          <Link href={'/trainers/flashcards/level-1/random-topic'}>
            <CardHeader>
              <CardTitle>Let God of Random choose!</CardTitle>
            </CardHeader>
            <CardContent className={'flex flex-col items-center'}>
              <Image src={ImgAlt1} alt={''} height={150} width={150} />
              Pick up random topic of words
            </CardContent>
          </Link>
        </Card>
      </CardContent>
    </Card>
  );
};
