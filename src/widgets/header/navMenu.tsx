'use client';

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/shared/ui/navigation-menu';
import { ModeToggle } from '@/features/themeSwitcher';
import { AboutUsMenu } from '@/entities/navMenu/ui/aboutUsMenu';
import { TrainersMenu } from '@/entities/navMenu/ui/trainersMenu';
import { SignUpSheet } from '@/entities/auth/ui/signUp';
import { LearnMoreBtn } from '@/entities/navMenu/ui/learnMoreBtn';
import { GitHubButton } from '@/entities/navMenu/ui/gitHubButton';

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <AboutUsMenu />
        <TrainersMenu />
        <LearnMoreBtn />
      </NavigationMenuList>
      <SignUpSheet />
      <GitHubButton />
      <ModeToggle />
    </NavigationMenu>
  );
};
