'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/shared/ui';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { TrainersLevelSelectUI } from '@/entities/trainers';
import { useEffect, useState } from 'react';

export default function GamePage() {
  const { userRole } = PersistBoundStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card
      className={
        'mt-4 grid gap-1 bg-lightSpace uxs:ml-4 uxs:mr-4 md:ml-6 md:mr-6 lg:ml-16 lg:mr-16 2xl:ml-32 2xl:mr-32'
      }
    >
      <CardHeader>
        <CardTitle className={''}>This is start of your game.</CardTitle>
        <CardDescription>
          Choose below variant and you should be lock & load and ready to go.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isMounted ? (
          <>{userRole.includes('story') && <TrainersLevelSelectUI />}</>
        ) : (
          <Skeleton />
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
