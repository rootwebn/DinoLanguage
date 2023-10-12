import { PageCard } from '@/entities/trainers/ui/pageCard';
import { Pen } from 'lucide-react';

export const GrammarTestBlock = () => {
  return (
    <div>
      <PageCard
        titleCard={'Grammar Test'}
        descCard={
          'Test and enhance your grammar-test prowess with our comprehensive Grammar Test!'
        }
        iconSrc={<Pen className={'mr-1.5'} />}
        footerCardBtnStart={'Start Training!'}
        footerCardBtnResult={'My Results'}
      />
    </div>
  );
};
