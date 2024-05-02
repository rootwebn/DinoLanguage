import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { BoundStore } from '@/shared/helpers/boundStorage';

export const StatesPanel = () => {
  const {
    attemptIdFlash,
    statsLevel1Flash,
    wordsGenMin,
    timeOnStage,
    targetLanguage,
    peacefulMode,
    customList,
    userRole,
  } = PersistBoundStore();
  const {
    stageFlash,
    score,
    scoreMultiplier,
    accuracyAnswers,
    rightAnswers,
    rightAnswersRow,
    wordIndex,
    words,
    prioritizedWords,
    translatedWordsRes,
    wordsRequest,
    time,
    timeOver,
  } = BoundStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current States.</CardTitle>
        <CardDescription>
          This is testing panel! You can manipulate states and data in left
          panel.
        </CardDescription>
      </CardHeader>
      <CardContent className={'grid grid-cols-2 grid-rows-1 gap-4'}>
        <Card className={'bg-lightSpace'}>
          <CardHeader>PersistBoundStore</CardHeader>
          <CardContent className={'flex flex-col justify-around'}>
            <div>Attempt ID Flashcards: {attemptIdFlash}</div>
            <div>
              Saved Stats:{' '}
              {statsLevel1Flash.map((item) => (
                <div key={item.attemptIdFlash}>{item.score}</div>
              ))}
            </div>
            <div>Minimum Words Generated: {wordsGenMin}</div>
            <div>Time on every stage: {timeOnStage}</div>
            <div>Target Language to Translate: {targetLanguage}</div>
            <div>PeacefulMode: {peacefulMode}</div>
            {/*<div>*/}
            {/*  Custom Lists(all available, title only):{' '}*/}
            {/*  {customList.map((item) => (*/}
            {/*    <div key={item.listId}>{item.listTitle}</div>*/}
            {/*  ))}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  Current Custom List(Picked only, title only):{' '}*/}
            {/*  {customList.map((item) => (*/}
            {/*    <div key={item.listId}>{item.listTitle}</div>*/}
            {/*  ))}*/}
            {/*</div>*/}
            <div>Array of Roles: {userRole + ''}</div>
          </CardContent>
        </Card>
        <Card className={'bg-darkSpace'}>
          <CardHeader>BoundStore</CardHeader>
          <CardContent className={'flex flex-col justify-around'}>
            <div>Stage Flashcards: {stageFlash}</div>
            <div>Score of Game: {score}</div>
            <div>Multiplier of Score: {scoreMultiplier}</div>
            <div>Streak of Correct Answers: {rightAnswersRow}</div>
            <div>Correct Answers: {rightAnswers}</div>
            <div>Accuracy of Answers: {accuracyAnswers}</div>
            <div>Index of Current Word: {wordIndex}</div>
            <div>Array of Words: {words + ''}</div>
            <div>Prioritized Words: {prioritizedWords}</div>
            <div>Translated Words: {translatedWordsRes.translatedWords}</div>
            <div>Requested Word(s) for translate: {wordsRequest}</div>
            <div>Current Time: {time}</div>
            <div>Is time over: {timeOver}</div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
