import * as React from 'react';
import { cn } from '@/lib/utils';
import s from '@/shared/styles/navMenu.module.scss';
import Image from 'next/image';
import ZapImage from '../../../../../public/zap.svg';
import BrainImage from '../../../../../public/brain.svg';
import SpeechImage from '../../../../../public/speech.svg';
import PenImage from '../../../../../public/pen.svg';

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

export function TrainersMenu() {
  return (
    <ul
      className={
        'grid min-w-[400px] gap-3 p-0 xs:grid-cols-2 md:min-w-[550px] lg:min-w-[600px]'
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
        Elevate your language skills with DinoLanguage engaging flashcards!
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
        href={'/trainers/grammar'}
        title={'Grammar Test'}
        className={'max-w-xs text-lightSpace hover:text-flower'}
        imageSrc={PenImage}
        widthImg={24}
        heightImg={24}
      >
        Test Your Grammar Skills with DinoLanguage!
      </ListItem>
    </ul>
  );
}
