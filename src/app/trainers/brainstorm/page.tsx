import {
  TrainersLevelDescription,
  TrainersLevelScoreUi,
  TrainersLevelSelectUI,
} from '@/entities/trainers/ui/';
import { BrainCircuit } from 'lucide-react';
import ImgAlt2 from '../../../../public/LogoAlt2.png';

export default function BrainstormPage() {
  return (
    <div
      className={
        'grid gap-1 uxs:ml-4 uxs:mr-4 md:ml-6 md:mr-6 lg:ml-10 lg:mr-10 2xl:ml-32 2xl:mr-32'
      }
    >
      <div
        className={'mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-4'}
      >
        <TrainersLevelScoreUi />
        <TrainersLevelDescription
          iconSrc={<BrainCircuit />}
          title={'Pay Attention!'}
          description={
            "DinoLanguage's Brainstorm challenges are not for the faint of heart. Designed for the boldest language learners, these challenges put your language skills to the test in high-pressure scenarios."
          }
          heightImage={200}
          widthImage={200}
          imageDescSrc={ImgAlt2}
          imageDescAlt={'DescImage'}
        />
        <TrainersLevelSelectUI />
      </div>
    </div>
  );
}
