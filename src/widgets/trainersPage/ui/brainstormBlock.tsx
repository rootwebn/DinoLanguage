import { PageCard } from '@/entities/trainers/ui/pageCard';
import { Brain } from 'lucide-react';

export const BrainstormBlock = () => {
  return (
    <div>
      <PageCard
        titleCard={'Brainstorm'}
        descCard={
          '  DinoLanguage Brainstorm challenges are not for the faint of heart. Designed for the boldest language learners, these challenges put your language skills to the test in high-pressure scenarios.'
        }
        iconSrc={<Brain className={'mr-1.5'} />}
        btnGameMode={'brainstorm'}
        footerBtnStatsHref={'/profile'}
        footerBtnStats={'Your Results!'}
        footerBtnGameHref={'/trainers/game'}
        footerBtnGame={'Start Adventure!'}
      />
    </div>
  );
};
