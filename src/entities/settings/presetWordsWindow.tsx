import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { toast } from 'sonner';
import Link from 'next/link';

export const PresetWordsWindow = () => {
  const {
    customList,
    setCurrentCustomList,
    currentCustomList,
    setUserSelectLevel,
  } = PersistBoundStore();

  const handleCustomList = (item: {
    listTitle: string;
    listDesc: string;
    listId: number;
    listWords: { customWord: string; customDef: string }[];
  }) => {
    setCurrentCustomList(item);
    setUserSelectLevel('customL');
    toast.loading('Trying to apply your settings...');

    setTimeout(() => {
      if (
        currentCustomList.listTitle === '' ||
        currentCustomList.listDesc === ''
      ) {
        toast.error('Error! Something goes wrong.');
      } else {
        toast.success(
          `Success! You loaded custom list ${currentCustomList.listTitle}`,
        );
        toast.dismiss();
      }
    }, 500);
  };

  return (
    <Card>
      <CardHeader>
        Your presets is here... Maybe. If you actually create them.
      </CardHeader>
      {customList.length === 0 ? (
        <CardContent className={'flex flex-col justify-around gap-2'}>
          <CardTitle>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Oi! Seems you don't have any custom list's yet.
          </CardTitle>
          <CardDescription>
            Click on button below to go to the greatest lab and create that one
            list if you want to continue game!
          </CardDescription>
          <div className={'flex flex-row justify-center'}>
            <Button asChild>
              <Link href={'/lab'}>The Greatest Lab</Link>
            </Button>
          </div>
        </CardContent>
      ) : (
        <CardContent className={'block max-h-[300px] overflow-y-scroll'}>
          {customList.map((item) => (
            <Card key={item.listId} className={'bg-darkSpace'}>
              <CardContent className={''}>
                <div className={'bg-space'}>List Title: {item.listTitle}</div>
                <div className={'bg-space'}>
                  List Description: {item.listDesc}
                </div>
                <Accordion type="single" collapsible className="">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Content Of Preset</AccordionTrigger>
                    <AccordionContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Word</TableHead>
                            <TableHead>Definition</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {item.listWords.map((itemWord, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">
                                {itemWord.customWord}
                              </TableCell>
                              <TableCell>{itemWord.customDef}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <Button onClick={() => handleCustomList(item)}>
                        Pick that one
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      )}

      <CardFooter></CardFooter>
    </Card>
  );
};
