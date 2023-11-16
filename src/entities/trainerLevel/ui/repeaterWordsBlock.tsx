import { ListPrioritizedWords } from '@/entities/trainerLevel/ui/listPrioritizedWords';
import { useEffect, useState } from 'react';

export const RepeaterWordsBlock = () => {
  const [componentTimer, setComponentTimer] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setComponentTimer(true);
  //   }, 5000);
  // });

  return (
    <div>{componentTimer ? <div>Stage 2</div> : <ListPrioritizedWords />}</div>
  );
};
