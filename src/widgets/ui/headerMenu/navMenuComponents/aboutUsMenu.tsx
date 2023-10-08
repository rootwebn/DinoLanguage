import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../../../../public/Logo.png';
import * as React from 'react';
import { cn } from '@/lib/utils';
import s from '@/shared/styles/navMenu.module.scss';

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
          <p className="line-clamp-2 text-sm leading-snug text-black dark:text-miniSilentWhite">
            {children}
          </p>
        </a>
      </li>
    );
  },
);

ListItem.displayName = 'ListItem';

export function AboutUsMenu() {
  return (
    <ul
      className={
        'grid gap-3 rounded-sm bg-waikanaGrey p-3 dark:bg-woodsmoke md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] '
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
