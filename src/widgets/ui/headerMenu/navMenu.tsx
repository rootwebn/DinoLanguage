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
import { cn } from '@/lib/utils';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from '@/shared/styles/navMenu.module.scss';
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
                    'pr-1 dark:brightness-[103%] dark:contrast-[103%] dark:hue-rotate-[93deg] dark:invert dark:saturate-[0%] dark:sepia-[0%]'
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
        <NavigationMenuItem className={'border-waikanaGrey'}>
          <NavigationMenuTrigger
            className={'bg-hash hover:bg-silentWhite text-white '}
          >
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={
                'bg-waikanaGrey grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] '
              }
            >
              <li className={'row-span-3'}>
                <Link href={'/Introduction'}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${'min-h-640 to-froly flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white from-20% outline-none dark:from-[#0A0A0A] dark:to-thunder'}`}
                  >
                    <div
                      className={
                        'border-waikanaGrey flex min-h-full select-none flex-col justify-end pb-1'
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
                        } ${'text-blackcurrant mt-4'}`}
                      >
                        DinoLanguage
                      </div>
                      <div
                        className={
                          'text-denim min-w-[3rem] max-w-[12rem] text-muted-foreground'
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
          <NavigationMenuTrigger
            className={'bg-hash hover:bg-silentWhite text-white'}
          >
            Trainers
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={
                'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
              }
            >
              <ListItem
                href={'/trainers'}
                title={'All Trainers'}
                className={'max-w-xs'}
                imageSrc={ZapImage}
                widthImg={24}
                heightImg={24}
              >
                Discover the full range of DinoLanguage trainers!
              </ListItem>

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
              className={`${navigationMenuTriggerStyle()} ${'bg-hash hover:bg-silentWhite mr-2 text-white hover:text-black'}`}
            >
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Button
        variant={'outline'}
        className={'bg-hash border-hash hover:bg-silentWhite mr-2'}
      >
        <Link href={'/sign-in'} className={'text-white hover:text-black'}>
          Sign In
        </Link>
      </Button>

      <Button
        variant={'outline'}
        className={'bg-hash border-hash hover:bg-silentWhite mr-2'}
      >
        <Link href={'https://github.com/rootwebn/DinoLanguage'}>
          <Github color={'#000000'} />
        </Link>
      </Button>
    </NavigationMenu>
  );
}
