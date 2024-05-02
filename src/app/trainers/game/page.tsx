'use client';

import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BrainstormGame } from '@/widgets/trainersPage/ui/brainstormGame';
import { FlashcardsGame } from '@/widgets/trainersPage/ui/FlashcardsGame';

export default function GamePage() {
  const { userGameMode } = PersistBoundStore();

  return (
    <>
      {userGameMode === 'brainstorm' && <BrainstormGame />}
      {userGameMode === 'flashcards' && <FlashcardsGame />}
    </>
  );
}
