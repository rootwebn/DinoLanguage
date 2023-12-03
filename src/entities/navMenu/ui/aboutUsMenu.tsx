import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../../../public/Logo.png';
import * as React from 'react';
import { ListItem } from '@/entities/navMenu/ui/listItem';

export function AboutUsMenu() {
  return (
    <ul
      className={
        'grid gap-3 rounded-sm bg-waikanaGrey p-3 dark:bg-woodsmoke md:w-[526px] xlg:grid-cols-[.75fr_1fr] xl:w-[600px]'
      }
    >
      <li className={'row-span-3'}>
        <Link
          className={
            'flex select-none flex-col justify-end rounded-md xlg:min-h-full xlg:bg-gradient-to-b xlg:from-silentWhite xlg:from-20% xlg:to-froly xlg:outline-none xlg:dark:from-woodsmoke xlg:dark:to-thunder'
          }
          href={'/Introduction'}
        >
          <div
            className={
              'flex min-h-full min-w-[250px] max-w-[300px] select-none flex-row justify-between rounded-md border-waikanaGrey xlg:min-h-full xlg:min-w-[220px] xlg:flex-col xlg:p-4 xlg:pt-2'
            }
          >
            <Image
              src={LogoImage}
              alt={'Logotype Image'}
              height={150}
              width={150}
              className={'pb-[0.75rem]'}
            />
            <div className={'flex flex-col '}>
              <div className={'mt-4 text-lightSpace xlg:mt-0'}>
                DinoLanguage
              </div>
              <div
                className={
                  'min-w-[3rem] max-w-[12rem] pt-2 text-black dark:text-silentWhite xlg:pt-0'
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
