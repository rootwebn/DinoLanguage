'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/shared/ui/navigation-menu';
import { ModeToggle } from '@/features/themeSwitcher';
import { SignUpSheet } from '@/entities/auth/ui/signUp';
import {
  GitHubButton,
  LearnMoreBtn,
  AboutUsMenu,
  TrainersMenu,
} from '@/entities/navMenu';

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              'bg-silentWhite text-black dark:bg-space dark:text-white'
            }
          >
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <AboutUsMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              'bg-silentWhite text-black dark:bg-space dark:text-white'
            }
          >
            Trainers
          </NavigationMenuTrigger>
          <NavigationMenuContent className={'bg-waikanaGrey dark:bg-woodsmoke'}>
            <TrainersMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <LearnMoreBtn />
      </NavigationMenuList>
      <SignUpSheet />
      <GitHubButton />
      <ModeToggle />
    </NavigationMenu>
  );
};
