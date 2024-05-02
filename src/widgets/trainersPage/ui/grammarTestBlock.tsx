import { PageCard } from '@/entities/trainers/ui/pageCard';
import { Clipboard, Pen } from 'lucide-react';

export const GrammarTestBlock = () => {
  return (
    <div>
      <PageCard
        titleCard={'Grammar Test'}
        descCard={
          'Test and enhance your grammar-test prowess with our comprehensive Grammar Test!'
        }
        iconSrc={<Pen className={'mr-1.5'} />}
        footerBtnGame={'Start Training!'}
        footerBtnStats={'My Results'}
        footerBtnGameHref={'/trainers/game'}
        footerBtnStatsHref={'/profile'}
        btnGameMode={'grammar'}
      />
    </div>
  );
};
