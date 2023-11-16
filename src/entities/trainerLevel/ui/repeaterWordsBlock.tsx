import { ListPrioritizedWords } from '@/entities/trainerLevel/ui/listPrioritizedWords';
import { useEffect, useState } from 'react';
import { RepeatWordsCard } from '@/entities/trainerLevel/ui/repeatWordsCard';

export const RepeaterWordsBlock = () => {
  const [componentTimer, setComponentTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setComponentTimer(true);
    }, 5000);
  });

  return (
    <div>{componentTimer ? <RepeatWordsCard /> : <ListPrioritizedWords />}</div>
  );
};
