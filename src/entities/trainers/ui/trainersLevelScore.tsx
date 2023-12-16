'use client';

import { Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useStatsLevel } from '@/entities/trainerLevel/model/useStatsLevel';
import { useStatsStorage } from '@/entities/trainerLevel/model/statsStorage';

interface TableListInterface {
  className: string | undefined;
  titleCell: string;
  dataScore: number;
  dataStreak: number;
  dataMultiplier: number;
}

interface TableHeaderInterface {
  className: string | undefined;
  titleHeader: string;
  titleHeader1: string;
  titleHeader2: string;
  titleHeader3: string;
}

const TableCellElement: React.FC<TableListInterface> = ({
  className,
  titleCell,
  dataScore,
  dataStreak,
  dataMultiplier,
}) => {
  return (
    <TableRow className={className}>
      <TableCell className={'dark:text-miniSilentWhite'}>{titleCell}</TableCell>
      <TableCell className={'dark:text-miniSilentWhite'}>{dataScore}</TableCell>
      <TableCell className={'dark:text-miniSilentWhite'}>
        {dataStreak}
      </TableCell>
      <TableCell className={'dark:text-miniSilentWhite'}>
        {dataMultiplier}
      </TableCell>
    </TableRow>
  );
};

const TableHeaderElement: React.FC<TableHeaderInterface> = ({
  titleHeader,
  titleHeader3,
  titleHeader2,
  titleHeader1,
  className,
}) => {
  return (
    <TableRow className={''}>
      <TableHead
        className={cn('w-[140px] text-turmeric dark:text-turmeric', className)}
      >
        {titleHeader}
      </TableHead>
      <TableHead className={cn('text-turmeric dark:text-turmeric', className)}>
        {titleHeader1}
      </TableHead>
      <TableHead className={cn('text-turmeric dark:text-turmeric', className)}>
        {titleHeader2}
      </TableHead>
      <TableHead className={cn('text-punch dark:text-punch', className)}>
        {titleHeader3}
      </TableHead>
    </TableRow>
  );
};

export const TrainersLevelScoreUi = () => {
  const statsLevel1 = useStatsStorage((state) => state.statsLevel1);
  return (
    <Card
      className={
        'max-h-[330px] border-silentWhite bg-silentWhite dark:border-space dark:bg-space'
      }
    >
      <CardHeader className={'p-3 pt-4'}>
        <CardTitle
          className={'flex flex-row text-flower dark:text-silentWhite'}
        >
          <Target color={'#000000'} className={'mr-1'} />
          Your Scores
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className={'pb-3 pl-3 pr-3 pt-0'}>
        <Tabs defaultValue={'trainerLevel-01'} className={''}>
          <TabsList className={'bg-miniSilentWhite dark:bg-darkSpace'}>
            <TabsTrigger
              value={'trainerLevel-01'}
              className={'text-lightSpace'}
            >
              Level 1
            </TabsTrigger>
            <TabsTrigger
              value={'trainerLevel-02'}
              className={'text-lightSpace'}
            >
              Level 2
            </TabsTrigger>
            <TabsTrigger
              value={'trainerLevel-03'}
              className={'text-lightSpace'}
            >
              Level 3
            </TabsTrigger>
            <TabsTrigger
              value={'trainerLevel-04'}
              className={'text-lightSpace'}
            >
              Level 4
            </TabsTrigger>
          </TabsList>
          <TabsContent value={'trainerLevel-01'} className={''}>
            <Table className={'max-h-[152px]'}>
              <TableHeader>
                <TableHeaderElement
                  className={''}
                  titleHeader={'Type of Score'}
                  titleHeader1={'Score'}
                  titleHeader2={'Score Multiplier'}
                  titleHeader3={'Streak correct answers'}
                />
              </TableHeader>
              <TableBody className={'relative w-full overflow-auto'}>
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={statsLevel1.score}
                  dataStreak={statsLevel1.streak}
                  dataMultiplier={statsLevel1.multiplier}
                />
              </TableBody>
            </Table>
            <div className={'pb-2 pt-2 text-center'}>
              Scroll to see more statistics! Also, bigger version in your
              <Link
                href={'/profile/stats'}
                className={'pl-1 hover:text-miniSilentWhite'}
              >
                profile
              </Link>
              .
            </div>
          </TabsContent>
          <TabsContent value={'trainerLevel-02'}>
            <Table className={'max-h-[152px]'}>
              <TableHeader>
                <TableHeaderElement
                  className={''}
                  titleHeader={'Type of Score'}
                  titleHeader1={'Score'}
                  titleHeader2={'Accuracy'}
                  titleHeader3={'Time'}
                />
              </TableHeader>
              <TableBody>
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={21000}
                  dataStreak={88}
                  dataMultiplier={statsLevel1.multiplier}
                />
              </TableBody>
            </Table>
            <div className={'pb-2 pt-2 text-center'}>
              Scroll to see more statistics! Also, bigger version in your
              profile.
            </div>
          </TabsContent>
          <TabsContent value={'trainerLevel-03'}>
            <Table className={'max-h-[152px]'}>
              <TableHeader>
                <TableHeaderElement
                  className={''}
                  titleHeader={'Type of Score'}
                  titleHeader1={'Score'}
                  titleHeader2={'Accuracy'}
                  titleHeader3={'Time'}
                />
              </TableHeader>
              <TableBody>
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataStreak={90}
                  dataMultiplier={statsLevel1.multiplier}
                />
              </TableBody>
            </Table>
            <div className={'pb-2 pt-2 text-center'}>
              Scroll to see more statistics! Also, bigger version in your
              profile.
            </div>
          </TabsContent>
          <TabsContent value={'trainerLevel-04'}>
            <Table className={'max-h-[152px]'}>
              <TableHeader>
                <TableHeaderElement
                  className={''}
                  titleHeader={'Type of Score'}
                  titleHeader1={'Score'}
                  titleHeader2={'Accuracy'}
                  titleHeader3={'Time'}
                />
              </TableHeader>
              <TableBody>
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataStreak={90}
                  dataMultiplier={statsLevel1.multiplier}
                />
              </TableBody>
            </Table>
            <div className={'pb-2 pt-2 text-center'}>
              Scroll to see more statistics! Also, bigger version in your
              profile.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
