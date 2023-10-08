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

interface TableListInterface {
  className: string | undefined;
  titleCell: string;
  dataScore: number;
  dataPercent: number;
  dataTime: string;
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
  dataPercent,
  dataTime,
}) => {
  return (
    <TableRow className={className}>
      <TableCell className={'dark:text-miniSilentWhite'}>{titleCell}</TableCell>
      <TableCell className={'dark:text-miniSilentWhite'}>{dataScore}</TableCell>
      <TableCell className={'dark:text-miniSilentWhite'}>
        {dataPercent}%
      </TableCell>
      <TableCell className={'dark:text-miniSilentWhite'}>{dataTime}</TableCell>
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
        className={cn('w-[140px] text-flower dark:text-honeyFlower', className)}
      >
        {titleHeader}
      </TableHead>
      <TableHead className={cn('text-flower dark:text-honeyFlower', className)}>
        {titleHeader1}
      </TableHead>
      <TableHead className={cn('text-flower dark:text-honeyFlower', className)}>
        {titleHeader2}
      </TableHead>
      <TableHead className={cn('text-flower dark:text-honeyFlower', className)}>
        {titleHeader3}
      </TableHead>
    </TableRow>
  );
};

export default function TrainersLevelScoreUi() {
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
        <Tabs defaultValue={'level-01'} className={''}>
          <TabsList className={'bg-miniSilentWhite dark:bg-darkSpace'}>
            <TabsTrigger value={'level-01'}>Level 1</TabsTrigger>
            <TabsTrigger value={'level-02'}>Level 2</TabsTrigger>
            <TabsTrigger value={'level-03'}>Level 3</TabsTrigger>
            <TabsTrigger value={'level-04'}>Level 4</TabsTrigger>
          </TabsList>
          <TabsContent value={'level-01'} className={''}>
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
              <TableBody className={'relative w-full overflow-auto'}>
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={12000}
                  dataPercent={78}
                  dataTime={'12:37'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={12000}
                  dataPercent={78}
                  dataTime={'12:37'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={12000}
                  dataPercent={78}
                  dataTime={'12:37'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={12000}
                  dataPercent={78}
                  dataTime={'12:37'}
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
          <TabsContent value={'level-02'}>
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
                  dataPercent={88}
                  dataTime={'15:55'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={21000}
                  dataPercent={88}
                  dataTime={'15:55'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={21000}
                  dataPercent={88}
                  dataTime={'15:55'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={21000}
                  dataPercent={88}
                  dataTime={'15:55'}
                />
              </TableBody>
            </Table>
            <div className={'pb-2 pt-2 text-center'}>
              Scroll to see more statistics! Also, bigger version in your
              profile.
            </div>
          </TabsContent>
          <TabsContent value={'level-03'}>
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
                  dataPercent={90}
                  dataTime={'11:46'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataPercent={90}
                  dataTime={'11:46'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataPercent={90}
                  dataTime={'11:46'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataPercent={90}
                  dataTime={'11:46'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataPercent={90}
                  dataTime={'11:46'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataPercent={90}
                  dataTime={'11:46'}
                />
              </TableBody>
            </Table>
            <div className={'pb-2 pt-2 text-center'}>
              Scroll to see more statistics! Also, bigger version in your
              profile.
            </div>
          </TabsContent>
          <TabsContent value={'level-04'}>
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
                  dataPercent={90}
                  dataTime={'11:46'}
                />
                <TableCellElement
                  className={''}
                  titleCell={'Total Score'}
                  dataScore={23000}
                  dataPercent={90}
                  dataTime={'11:46'}
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
}
