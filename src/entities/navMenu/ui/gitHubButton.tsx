import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import * as React from 'react';

export const GitHubButton = () => {
  return (
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
  );
};
