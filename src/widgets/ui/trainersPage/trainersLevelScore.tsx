import { Target } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';

export default function TrainersLevelScoreUi() {
  return (
    <Alert className={'min-h-[265px]'}>
      <Target />
      <AlertTitle className={'text-xl'}>Your Scores:</AlertTitle>
      <AlertDescription>
        <Tabs>
          <TabsList>
            <TabsTrigger value={'level-01'}>Level 1</TabsTrigger>
            <TabsTrigger value={'level-02'}>Level 2</TabsTrigger>
            <TabsTrigger value={'level-03'}>Level 3</TabsTrigger>
            <TabsTrigger value={'level-04'}>Level 4</TabsTrigger>
          </TabsList>
          <TabsContent value={'level-01'}>
            <Table>
              <TableHeader>
                <TableHead>
                  <TableRow></TableRow>
                </TableHead>
              </TableHeader>
              <TableBody>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableBody>
              <TableFooter></TableFooter>
            </Table>
          </TabsContent>
          <TabsContent value={'level-02'}></TabsContent>
          <TabsContent value={'level-03'}></TabsContent>
          <TabsContent value={'level-04'}></TabsContent>
        </Tabs>
      </AlertDescription>
    </Alert>
  );
}
