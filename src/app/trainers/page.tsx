import {
  FlashcardsBlock,
  GrammarTestBlock,
  VerbalMemoryBlock,
  BrainstormBlock,
} from '@/widgets/trainersPage/ui/';

export default function TrainersPage() {
  return (
    <div
      className={'mb-6 ml-6 mr-6 mt-6 lg:ml-16 lg:mr-16 2xl:ml-32 2xl:mr-32'}
    >
      <FlashcardsBlock />
      <BrainstormBlock />
      <VerbalMemoryBlock />
      <GrammarTestBlock />
    </div>
  );
}
