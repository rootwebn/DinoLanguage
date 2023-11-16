'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/';
import { Menu } from 'lucide-react';
import * as React from 'react';
import {
  AboutUsMenu,
  TrainersMenu,
  AdditionMenu,
} from '@/entities/navMenu/ui/';
import { AccountMenu } from '@/entities/auth/ui/';
import { ModeToggle } from '@/features/themeSwitcher';

const NavMenuMobile = () => {
  return (
    <div className={'flex flex-row'}>
      <ModeToggle />
      <Sheet>
        <SheetTrigger
          className={
            'ml-2 flex h-[40px] w-[40px] items-center justify-center rounded-md hover:bg-silentWhite dark:hover:bg-space'
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
    </div>
  );
};

export default NavMenuMobile;
