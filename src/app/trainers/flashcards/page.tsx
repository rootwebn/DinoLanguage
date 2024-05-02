'use client';
import {
  TrainersLevelDescription,
  TrainersLevelScoreUi,
  TrainersLevelSelectUI,
} from '@/entities/trainers/ui/';
import { Zap } from 'lucide-react';
import ImgAlt2 from '../../../../public/LogoAlt2.png';
import { useEffect, useState } from 'react';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { Button, Skeleton } from '@/shared/ui';
export default function FlashcardTrainerPage() {
  const { userRole, setUserRole } = PersistBoundStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={
        'grid gap-1 uxs:ml-4 uxs:mr-4 md:ml-6 md:mr-6 lg:ml-16 lg:mr-16 2xl:ml-32 2xl:mr-32'
      }
    >
      <div
        className={'mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-4'}
      >
        <TrainersLevelScoreUi />
        <TrainersLevelDescription
          iconSrc={<Zap color={'#000000'} className={'mr-1.5'} />}
          title={'Pay Attention!'}
          description={
            "DinoLanguage's Flashcards are more than just vocabulary drills; they're a high-speed journey to language mastery. "
          }
          heightImage={200}
          widthImage={200}
          imageDescSrc={ImgAlt2}
          imageDescAlt={'ImageDesc'}
        />
        {userRole.length === 0 && (
          <Button onClick={() => setUserRole('tutorial')}>
            Lol you broke this
          </Button>
        )}

        {isMounted ? (
          <>
            {userRole.includes('story') && <TrainersLevelSelectUI />}
            {/*{userRole.includes('custom') && <TrainersLevelSelectUI />}*/}
            {userRole.includes('tutorial') && <></>}
          </>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}
