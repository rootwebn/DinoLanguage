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
import { Button } from '@/shared/ui/button';
import { ModeToggle } from '@/features/themeSwitcher';
import s from '@/shared/styles/navMenu.module.scss';
import { cn } from '@/lib/utils';
import * as React from 'react';
import Link from 'next/link';
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
              `${'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-thunder focus:bg-accent focus:text-thunder'} ${
                s.navListMenu
              }`,
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
                    'pr-1 dark:brightness-[103%] dark:contrast-[103%] dark:hue-rotate-[93deg] dark:invert dark:saturate-[0%] dark:sepia-[0%]'
                  }
                />
              )}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-black dark:text-silentWhite">
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
          <NavigationMenuTrigger
            className={
              'bg-silentWhite text-black dark:bg-space dark:text-white'
            }
          >
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={
                'grid gap-3 bg-silentWhite p-6 dark:bg-woodsmoke md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] '
              }
            >
              <li className={'row-span-3'}>
                <Link href={'/Introduction'}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${'min-h-640 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-silentWhite from-20% to-froly outline-none dark:from-woodsmoke dark:to-thunder'}`}
                  >
                    <div
                      className={
                        'flex min-h-full select-none flex-col justify-end border-waikanaGrey pb-1'
                      }
                    >
                      <Image
                        src={LogoImage}
                        alt={'Logotype Image'}
                        height={150}
                        width={170}
                      />
                      <div
                        className={`${
                          s.projectTitle
                        } ${'mt-4 text-lightSpace'}`}
                      >
                        DinoLanguage
                      </div>
                      <div
                        className={
                          'min-w-[3rem] max-w-[12rem] text-darkSpace text-muted-foreground'
                        }
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
                className={'text-lightSpace hover:text-flower'}
                imageSrc={''}
              >
                Explore DinoLanguage - Your Path to Language Mastery!
              </ListItem>

              <ListItem
                href="/about-us#team"
                title="Our Team"
                className={'text-lightSpace hover:text-flower'}
              >
                Meet the Team: The Brains Behind DinoLanguage!
              </ListItem>

              <ListItem
                href="/about-us#values"
                title="Values of Project"
                className={'text-lightSpace hover:text-flower'}
              >
                Explore DinoLanguage: Where Dinosaurs Meet Modern Values!
              </ListItem>
            </ul>
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
            <ul
              className={
                'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
              }
            >
              <ListItem
                href={'/trainers'}
                title={'All Trainers'}
                className={'max-w-xs text-lightSpace hover:text-flower'}
                imageSrc={ZapImage}
                widthImg={24}
                heightImg={24}
              >
                Discover the full range of DinoLanguage trainers!
              </ListItem>

              <ListItem
                href={'/trainers/flashcards'}
                title={'Flashcards'}
                className={'max-w-xs text-lightSpace hover:text-flower'}
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
                className={'max-w-xs text-lightSpace hover:text-flower'}
                imageSrc={BrainImage}
                widthImg={24}
                heightImg={24}
              >
                Explore DinoLanguage Brainstorm for a Creative Challenge!
              </ListItem>

              <ListItem
                href={'/trainers/verbal-memory'}
                title={'Verbal Memory'}
                className={'max-w-xs text-lightSpace hover:text-flower'}
                imageSrc={SpeechImage}
                widthImg={24}
                heightImg={24}
              >
                Boost Your Verbal Memory with DinoLanguage!
              </ListItem>

              <ListItem
                href={'/trainers/grammar-test'}
                title={'Grammar Test'}
                className={'max-w-xs text-lightSpace hover:text-flower'}
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
              className={`${navigationMenuTriggerStyle()} ${'mr-1 bg-silentWhite text-black hover:text-black dark:bg-space dark:text-white'}`}
            >
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Button
        variant={'outline'}
        className={
          'mr-1 border-silentWhite bg-silentWhite dark:border-space dark:bg-space'
        }
      >
        <Link
          href={'/sign-in'}
          className={'text-black hover:text-black dark:text-white'}
        >
          Sign In
        </Link>
      </Button>

      <Button
        variant={'outline'}
        className={
          'mr-1 border-silentWhite bg-silentWhite dark:border-space dark:bg-space'
        }
      >
        <Link href={'https://github.com/rootwebn/DinoLanguage'}>
          <Github color={'#000000'} className={'dark:stroke-white'} />
        </Link>
      </Button>

      <ModeToggle />
    </NavigationMenu>
  );
}
