import TrainersLevelSelectUI from '@/widgets/ui/trainersPage/trainersLevelSelect';
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/alert';
import { BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import LogoAlt2 from '../../../../public/LogoAlt2.png';
import TrainersLevelScoreUi from '@/widgets/ui/trainersPage/trainersLevelScore';

export default function BrainstormPage() {
  return (
    <div
      className={
        'grid gap-1 md:ml-6 md:mr-6 lg:ml-10 lg:mr-10 2xl:ml-32 2xl:mr-32'
      }
    >
      <div className={'grid grid-cols-2 gap-4'}>
        <TrainersLevelScoreUi />
        <Alert className={'justify-self-end'}>
          <BrainCircuit />
          <AlertTitle className={'text-xl'}>Heads Up!</AlertTitle>
          <AlertDescription className={'flex flex-row-reverse justify-between'}>
            <Image
              src={LogoAlt2}
              alt={'LogoAlternative'}
              height={200}
              width={200}
            />
            <div className={'flex items-center text-lg'}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              DinoLanguage's Brainstorm challenges are not for the faint of
              heart. Designed for the boldest language learners, these
              challenges put your language skills to the test in high-pressure
              scenarios.
            </div>
          </AlertDescription>
        </Alert>
      </div>
      <TrainersLevelSelectUI />
    </div>
  );
}
