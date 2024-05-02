import { PageCard } from '@/entities/trainers/ui/pageCard';
import { Speech } from 'lucide-react';

export const VerbalMemoryBlock = () => {
  return (
    <div>
      <PageCard
        titleCard={'Verbal Memory'}
        descCard={'Sharpen your verbal memory skills with engaging exercises!'}
        iconSrc={<Speech className={'mr-1.5'} />}
        footerBtnGame={'Start Training!'}
        footerBtnStats={'My Results'}
        footerBtnGameHref={'/trainers/game'}
        footerBtnStatsHref={'/profile'}
        btnGameMode={'grammar'}
      />
    </div>
  );
};
