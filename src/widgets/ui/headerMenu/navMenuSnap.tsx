import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs';
import { Menu } from 'lucide-react';
import * as React from 'react';
import { AboutUsMenu } from '@/widgets/ui/headerMenu/navMenuComponents/aboutUsMenu';
import { TrainersMenu } from '@/widgets/ui/headerMenu/navMenuComponents/trainersMenu';
import { AdditionMenu } from '@/widgets/ui/headerMenu/navMenuComponents/additionMenu';
import { AccountMenu } from '@/widgets/ui/headerMenu/navMenuComponents/accountMenu';

export function NavMenuSnap() {
  return (
    <Sheet>
      <SheetTrigger
        className={
          'ml-2 rounded-md px-2 hover:bg-silentWhite dark:hover:bg-space'
        }
      >
        <Menu />
      </SheetTrigger>
      <SheetContent
        className={
          'w-full min-w-[250px] bg-silentWhite dark:bg-darkSpace sm:max-w-xl'
        }
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <Tabs defaultValue="aboutus" className="">
            <TabsList className={'bg-miniSilentWhite dark:bg-space'}>
              <TabsTrigger value="aboutus" className={'text-lightSpace'}>
                About Us
              </TabsTrigger>
              <TabsTrigger value="trainers" className={'text-lightSpace'}>
                Trainers
              </TabsTrigger>
              <TabsTrigger value="addition" className={'text-lightSpace'}>
                Addition
              </TabsTrigger>
              <TabsTrigger value="account" className={'text-lightSpace'}>
                Account
              </TabsTrigger>
            </TabsList>
            <TabsContent value="aboutus">
              <AboutUsMenu />
            </TabsContent>
            <TabsContent value="trainers">
              <TrainersMenu />
            </TabsContent>
            <TabsContent value={'addition'}>
              <AdditionMenu />
            </TabsContent>
            <TabsContent value={'account'}>
              <AccountMenu />
            </TabsContent>
          </Tabs>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
