import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../../../public/Logo.png';
import * as React from 'react';
import { ListItem } from '@/entities/navMenu/ui/listItem';
import s from '@/shared/styles/navMenu.module.scss';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/shared/ui/navigation-menu';

export function AboutUsMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={'bg-silentWhite text-black dark:bg-space dark:text-white'}
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
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${'min-h-640 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-silentWhite from-20% to-froly outline-none dark:from-woodsmoke dark:to-thunder'}`}
              href={'/Introduction'}
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
                <div className={`${s.projectTitle} ${'mt-4 text-lightSpace'}`}>
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
  );
}

export function AboutUsMenuMobile() {
  return (
    <ul
      className={
        'grid gap-3 rounded-sm bg-waikanaGrey p-3 text-left dark:bg-woodsmoke md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] '
      }
    >
      <li className={'row-span-3'}>
        <Link href={'/Introduction'}>
          <div
            className={
              'flex min-h-full min-w-[250px] max-w-[300px] select-none flex-row justify-between border-waikanaGrey'
            }
          >
            <Image
              src={LogoImage}
              alt={'Logotype Image'}
              height={100}
              width={100}
            />
            <div>
              <div className={'text-honeyFlower'}>DinoLanguage</div>
              <div
                className={
                  'min-w-[3rem] max-w-[12rem] pt-2 text-black dark:text-silentWhite'
                }
              >
                Unearth the Joy of Language Learning with Dinosaurs!
              </div>
            </div>
          </div>
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
  );
}
