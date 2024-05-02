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
import { SettingsForm } from '@/entities/settings/settingsForm';
import { PresetWordsWindow } from '@/entities/settings/presetWordsWindow';

type FlashcardsSettingsType = {
  customListWords: boolean;
};

export const FlashcardsDialogSettings: React.FC<FlashcardsSettingsType> = ({
  customListWords,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={'bg-lightSpace'}>Settings</Button>
      </DialogTrigger>
      <DialogContent className={'max-h-[600px] max-w-[1000px]'}>
        <DialogHeader>
          <DialogTitle>Edit settings flashcards</DialogTitle>
          <DialogDescription>
            Customize your flashcard experience! Tailor topics, set difficulty,
            and adjust timing. Personalize your learning journey with ease.
          </DialogDescription>
        </DialogHeader>
        <div className={'flex flex-col justify-center'}>
          <PresetWordsWindow />
        </div>
      </DialogContent>
    </Dialog>
  );
};
