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
import { AboutUsMenu } from '@/entities/navMenu/ui/aboutUsMenu';
import { TrainersMenu } from '@/entities/navMenu/ui/trainersMenu';
import { AdditionMenu } from '@/entities/navMenu/ui/additionMenu';
import { AccountMenu } from '@/entities/auth/ui/accountMenu';

export const NavMenuMobile = () => {
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
          'w-full min-w-[250px] bg-silentWhite pb-6 pl-3 pr-3 pt-6 dark:bg-darkSpace sm:max-w-xl'
        }
      >
        <SheetHeader className={'text-left'}>
          <SheetTitle className={''}>Menu</SheetTitle>
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
};
