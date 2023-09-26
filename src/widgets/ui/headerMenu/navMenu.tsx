'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/shared/ui/navigation-menu';
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import s from '@/shared/styles/navMenu.module.scss';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Github } from 'lucide-react';
import LogoImage from '../../../../public/Logo.png';
import BrainImage from '../../../../public/brain.svg';
import PenImage from '../../../../public/pen.svg';
import ZapImage from '../../../../public/zap.svg';
import SpeechImage from '../../../../public/speech.svg';

interface ListItemProps {
  title: string;
  imageSrc?: string;
  titleImg?: string;
  widthImg?: number;
  heightImg?: number;
  className: string | undefined;
  children: React.ReactNode;
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  (
    {
      className,
      widthImg = 30,
      heightImg = 30,
      imageSrc = '',
      titleImg = '',
      title,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="flex flex-row items-center text-base font-medium leading-none">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={titleImg}
                  width={widthImg}
                  height={heightImg}
                  className={
                    'contrast-[103%]; pr-1 brightness-[103%] hue-rotate-[93deg] invert saturate-[0%] sepia-[0%]'
                  }
                />
              )}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);

ListItem.displayName = 'ListItem';

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={s.navMenuItem}>
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={
                'grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]'
              }
            >
              <li className={'row-span-3'}>
                <Link href={'/Introduction'}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${'min-h-640 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-black from-20% to-thunder outline-none'}`}
                  >
                    <div
                      className={`${
                        s.projectDescContainer
                      } ${'flex min-h-full select-none flex-col justify-end '}`}
                    >
                      <Image
                        src={LogoImage}
                        alt={'Logotype Image'}
                        height={150}
                        width={170}
                      />
                      <div className={`${s.projectTitle} ${'mt-4'}`}>
                        DinoLanguage
                      </div>
                      <div
                        className={`${
                          s.projectDesc
                        } ${'text-muted-foreground'}`}
                      >
                        Unearth the Joy of Language Learning with Dinosaurs!
                      </div>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </li>

              <ListItem
                href="/about-us"
                title="Introduction"
                className={''}
                imageSrc={''}
              >
                Explore DinoLanguage - Your Path to Language Mastery!
              </ListItem>

              <ListItem href="/about-us#team" title="Our Team" className={''}>
                Meet the Team: The Brains Behind DinoLanguage!
              </ListItem>

              <ListItem
                href="/about-us#values"
                title="Values of Project"
                className={''}
              >
                Explore DinoLanguage: Where Dinosaurs Meet Modern Values!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Trainers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={
                'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
              }
            >
              <ListItem
                href={'/trainers/flashcards'}
                title={'Flashcards'}
                className={'max-w-xs'}
                imageSrc={ZapImage}
                widthImg={24}
                heightImg={24}
              >
                Elevate your language skills with DinoLanguage engaging
                flashcards!
              </ListItem>

              <ListItem
                href={'/trainers/brainstorm'}
                title={'Brainstorm'}
                className={'max-w-xs'}
                imageSrc={BrainImage}
                widthImg={24}
                heightImg={24}
              >
                Explore DinoLanguage Brainstorm for a Creative Challenge!
              </ListItem>

              <ListItem
                href={'/trainers/verbal-memory'}
                title={'Verbal Memory'}
                className={'max-w-xs'}
                imageSrc={SpeechImage}
                widthImg={24}
                heightImg={24}
              >
                Boost Your Verbal Memory with DinoLanguage!
              </ListItem>

              <ListItem
                href={'/trainers/grammar-test'}
                title={'Grammar Test'}
                className={'max-w-xs'}
                imageSrc={PenImage}
                widthImg={24}
                heightImg={24}
              >
                Test Your Grammar Skills with DinoLanguage!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={'/documentation'} legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${'mr-2'}`}
            >
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Button variant={'outline'} className={s.navMenuButton}>
        <Link href={'/'}>Sign In</Link>
      </Button>

      <Button variant={'outline'} className={s.navMenuButton}>
        <Link href={'https://github.com/rootwebn/DinoLanguage'}>
          <Github />
        </Link>
      </Button>
    </NavigationMenu>
  );
}
