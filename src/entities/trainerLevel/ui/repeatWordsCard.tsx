import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import useFlashCheck from '@/entities/trainerLevel/model/useFlashCheck';
import LoadingGif from '../../../../public/Loading_backD.gif';
import Image from 'next/image';
import { BoundStore } from '@/shared/helpers/boundStorage';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';

export const RepeatWordsCard = () => {
  const { handleUserMemo } = useFlashCheck();
  const { userSelectLevel, currentCustomList } = PersistBoundStore();
  const { prioritizedWords, translatedWordsRes, wordIndex } = BoundStore();

  return (
    <Card className={'bg-eclipseGray'}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <CardHeader>Okay! Let's memorize some words.</CardHeader>
      <CardContent className={'flex flex-row justify-around gap-4'}>
        <div className={'flex flex-col justify-around'}>
          <div className={'flex flex-col'}>
            Try to memorize these words:
            <div>
              <div className={'flex flex-row justify-center'}>
                {userSelectLevel === 'customL' ? (
                  <div>
                    <div>
                      {currentCustomList.listWords[wordIndex].customWord} is{' '}
                      {currentCustomList.listWords[wordIndex].customDef}
                    </div>
                  </div>
                ) : (
                  <>
                    {prioritizedWords[wordIndex]} is{' '}
                    {translatedWordsRes.translatedWords[wordIndex]}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={'flex flex-row justify-center'}>
            <Button onClick={handleUserMemo} className={'mt-6'}>
              Memorized. Next!
            </Button>
          </div>
        </div>
        <Image width={150} height={150} alt={'LoadingGif'} src={LoadingGif} />
      </CardContent>
    </Card>
  );
};
