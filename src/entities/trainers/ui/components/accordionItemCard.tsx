import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import React from 'react';

interface AccordionInterface {
  itemValue: string;
  itemTriggerTitle: string;
  itemContentDesc: string;
}

export const AccordionItemCard: React.FC<AccordionInterface> = ({
  itemValue,
  itemTriggerTitle,
  itemContentDesc,
}) => {
  return (
    <AccordionItem value={itemValue}>
      <AccordionTrigger className={'text-royalBlue'}>
        {itemTriggerTitle}
      </AccordionTrigger>
      <AccordionContent className={'text-chattel'}>
        {itemContentDesc}
      </AccordionContent>
    </AccordionItem>
  );
};
