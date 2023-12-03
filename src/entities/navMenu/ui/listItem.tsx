import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

export const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
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
            `${'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-thunder focus:bg-accent focus:text-thunder'} 
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
