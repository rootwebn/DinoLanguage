import { PageCard } from '@/entities/trainers/ui/';
import { Clipboard } from 'lucide-react';

export const FlashcardsBlock = () => {
  return (
    <div>
      <PageCard
        titleCard={'Flashcards'}
        descCard={
          'Maximize vocabulary and grammar-test mastery with our interactive flashcards!'
        }
        iconSrc={<Clipboard className={'mr-1.5'} />}
        footerCardBtnStart={'Start Training!'}
        footerCardBtnResult={'My Results'}
      />
    </div>
  );
};
