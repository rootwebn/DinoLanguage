import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { toast } from 'sonner';

export const PresetWordsWindow = () => {
  const { customList, setCurrentCustomList, currentCustomList } =
    PersistBoundStore();

  const handleCustomList = (item: {
    listTitle: string;
    listDesc: string;
    listId: number;
    listWords: { customWord: string; customDef: string }[];
  }) => {
    setCurrentCustomList(item);
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
      <CardFooter></CardFooter>
    </Card>
  );
};
