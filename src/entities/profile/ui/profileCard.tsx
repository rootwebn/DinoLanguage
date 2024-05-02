'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Skeleton,
  FormControl,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
  Button,
} from '@/shared/ui';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { SettingsForm } from '@/entities/settings/settingsForm';
import React, { useEffect, useState } from 'react';
import { findPath, generateGrid } from '@/lib/pathfindingScript';

export const ProfileCard = () => {
  const { userName, statsLevel1Flash, userRole, deleteUserRole } =
    PersistBoundStore();
  const [isMounted, setIsMounted] = useState(false);
  const rows = 5;
  const cols = 5;
  const obstacleProbability = 0.2;
  const grid = generateGrid(rows, cols, obstacleProbability);
  const startX = 0;
  const startY = 0;
  const endX = 4;
  const endY = 4;
  const useDiagonals = false;

  const onGrid = () => {
    const path = findPath(startX, startY, endX, endY, grid, useDiagonals);
    if (path.length > 0) {
      console.log('Path found:');
      console.log(path.map(([x, y]) => `(${x}, ${y})`).join(' -> '));
    } else {
      console.log('No path found.');
    }

    console.log('Grid with path marked:');
    console.log(grid.map((row) => row.join(' ')).join('\n'));
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card
      className={
        'mb-6 ml-6 mr-6 mt-6 bg-hash lg:ml-16 lg:mr-16 2xl:ml-32 2xl:mr-32'
      }
    >
      {isMounted ? (
        <>
          <CardHeader className={''}>
            <CardTitle>Your profile here, {userName}!</CardTitle>
            <CardDescription>
              You can change here your preferences, name, and much more!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="Stats" className="">
              <TabsList>
                <TabsTrigger value="Stats">Stats</TabsTrigger>
                <TabsTrigger value="Preferences">Preferences</TabsTrigger>
                <TabsTrigger value="Exp">Testing things</TabsTrigger>
              </TabsList>
              <TabsContent value="Stats" className={''}>
                <Table>
                  <TableCaption>A list of your statistics.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="">Attempt</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Score Multiplier</TableHead>
                      <TableHead>Accuracy answers</TableHead>
                      <TableHead>Correct answers</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="">Total answers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {statsLevel1Flash.map((item) => (
                      <TableRow key={item.attemptIdFlash}>
                        <TableCell className="font-medium">
                          {item.attemptIdFlash}
                        </TableCell>
                        <TableCell>{item.score}</TableCell>
                        <TableCell>{item.scoreMultiplier}</TableCell>
                        <TableCell>{item.accuracyAnswers}</TableCell>
                        <TableCell>{item.rightAnswers}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.totalAnswers}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="Preferences" className={''}>
                <Card className={'bg-darkerHash'}>
                  <CardHeader>
                    <CardTitle>
                      Your preference now is: {userRole + ''}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SettingsForm />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Exp" className={''}>
                <Button onClick={() => generateGrid(5, 5, 0.2)}>
                  Generate grid
                </Button>
                <Button onClick={() => onGrid()}>Something strange...</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </>
      ) : (
        <Skeleton className={'min-h-[307px] min-w-[1232px]'} />
      )}
    </Card>
  );
};
