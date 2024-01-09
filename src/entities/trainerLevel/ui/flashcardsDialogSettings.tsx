import {
  Button,
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from '@/shared/ui';
import React from 'react';
import { SettingsForm } from '@/entities/trainerLevel/ui/settingsForm';

export const FlashcardsDialogSettings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={'bg-lightSpace'}>Settings</Button>
      </DialogTrigger>
      <DialogContent className={'min-w-[600px]'}>
        <DialogHeader>
          <DialogTitle>Edit settings flashcards</DialogTitle>
          <DialogDescription>
            Customize your flashcard experience! Tailor topics, set difficulty,
            and adjust timing. Personalize your learning journey with ease.
          </DialogDescription>
        </DialogHeader>
        <div className={'flex flex-row justify-center'}>
          <SettingsForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
