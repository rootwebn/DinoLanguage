import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import Image, { StaticImageData } from 'next/image';

interface LevelDescription {
  iconSrc: JSX.Element;
  title: string;
  description: string;
  heightImage: number;
  widthImage: number;
  imageDescSrc: StaticImageData;
  imageDescAlt: string;
}

export function TrainersLevelDescription({
  iconSrc,
  title,
  description,
  heightImage = 200,
  widthImage = 200,
  imageDescSrc,
  imageDescAlt,
}: LevelDescription) {
  return (
    <Card
      className={
        'border-silentWhite bg-silentWhite dark:border-space dark:bg-space'
      }
    >
      <CardHeader>
        <CardTitle
          className={'flex flex-row text-flower dark:text-silentWhite'}
        >
          <div>{iconSrc}</div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={
          'flex flex-col items-center justify-between sm:flex-row-reverse'
        }
      >
        <Image
          src={imageDescSrc}
          alt={imageDescAlt}
          height={heightImage}
          width={widthImage}
        />
        <div className={'flex items-center text-lg'}>{description}</div>
      </CardContent>
    </Card>
  );
}
