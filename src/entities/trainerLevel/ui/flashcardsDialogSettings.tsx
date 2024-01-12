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
import { CustomListForm } from '@/entities/trainerLevel/ui/customListForm';

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
      <DialogContent className={'min-w-[600px]'}>
        <DialogHeader>
          <DialogTitle>Edit settings flashcards</DialogTitle>
          <DialogDescription>
            Customize your flashcard experience! Tailor topics, set difficulty,
            and adjust timing. Personalize your learning journey with ease.
          </DialogDescription>
        </DialogHeader>
        <div className={'flex flex-col justify-center'}>
          {customListWords && <CustomListForm />}
          <SettingsForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
