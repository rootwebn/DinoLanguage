import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import * as React from 'react';

export function AdditionMenu() {
  return (
    <div
      className={
        'grid grid-cols-[0.5fr_1fr] grid-rows-1 gap-1 pb-2 xs:flex xs:flex-row'
      }
    >
      <Button
        variant={'outline'}
        className={
          'border-hash bg-hash hover:bg-silentWhite dark:border-space dark:bg-space'
        }
      >
        <Link href={'/'} className={'text-white hover:text-black'}>
          Documentation!
        </Link>
      </Button>
      <Button
        variant={'outline'}
        className={
          'border-hash bg-hash hover:bg-silentWhite dark:border-space dark:bg-space'
        }
      >
        <Link
          href={'https://github.com/rootwebn/DinoLanguage'}
          className={'flex items-center text-white hover:text-black'}
        >
          Our code on GitHub!
          <Github color={'#000000'} className={'pl-1 dark:stroke-white'} />
        </Link>
      </Button>
    </div>
  );
}
