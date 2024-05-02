'use client';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/shared/ui';
import { StatesPanel } from '@/entities/testingPanels/statesPanel';
import { ActionsPanel } from '@/entities/testingPanels/actionsPanel';
import { useEffect, useState } from 'react';
import { Icon } from '@radix-ui/react-select';
import { X } from 'lucide-react';

export const DebugPanel = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isOpen ? (
        <Card
          className={'fixed bottom-0 z-[99999] max-h-[20rem] bg-darkerHash'}
        >
          <CardHeader className={'flex flex-row items-start justify-between'}>
            <CardTitle>Debug Panel! Here you can do everything!</CardTitle>
            <Button
              className={'max-h-[24px] max-w-[24px] bg-transparent'}
              size={'icon'}
              onClick={() => setIsOpen(false)}
            >
              <X />
            </Button>
          </CardHeader>
          <CardContent className={'flex flex-row justify-around gap-5'}>
            {isMounted ? (
              <>
                <ActionsPanel />
                <StatesPanel />
              </>
            ) : (
              <Skeleton />
            )}
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size={'icon'}
          className={'z-50 ml-3 max-h-[30px] max-w-[30px] bg-darkerHash'}
        >
          <Icon></Icon>
        </Button>
      )}
    </>
  );
};
