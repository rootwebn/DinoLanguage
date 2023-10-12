import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/shared/ui/navigation-menu';
import * as React from 'react';
import Link from 'next/link';

export const LearnMoreBtn = () => {
  return (
    <NavigationMenuItem>
      <Link href={'/learn-more'} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} ${'mr-1 bg-silentWhite text-black hover:text-black dark:bg-space dark:text-white'}`}
        >
          Learn More!
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
