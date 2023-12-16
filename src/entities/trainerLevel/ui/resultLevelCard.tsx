import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { useStatsStorage } from '@/entities/trainerLevel/model/statsStorage';

export const ResultLevelCard = () => {
  const levelStorage = useStatsStorage((state) => state.statsLevel1);
  return (
    <Card>
      <CardHeader>YOUR RESULT OF LEVEL, YOU DID IT!</CardHeader>
      <CardContent>
        Your score: {levelStorage.score}&nbsp; Your multiplier:{' '}
        {levelStorage.multiplier}&nbsp; Your streak of correct answers:{' '}
        {levelStorage.streak}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
