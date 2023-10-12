'use client';

import { NavMenu } from '@/widgets/header/navMenu';
import { NavMenuMobile } from '@/widgets/header/navMenuMobile';
import Image from 'next/image';
import Logo from '../../../public/Logo.png';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ModeToggle } from '@/features/themeSwitcher';
import * as React from 'react';

export function Header() {
  const [headerSnap, setHeaderSnap] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setHeaderSnap(true);
      } else {
        setHeaderSnap(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={
        'sticky top-0 z-10 flex flex-row items-center justify-between border-b-2 border-miniSilentWhite bg-hash px-2 pb-1 pt-1 dark:border-space dark:bg-darkSpace xl:px-32 '
      }
    >
      <div className={'flex flex-row'}>
        <Image
          src={Logo}
          alt={'logo'}
          height={70}
          width={70}
          className={'p-1'}
        />
        <Link
          href={'/'}
          className={
            'ml-1 flex scroll-m-20 items-center justify-center text-2xl font-semibold tracking-tight text-white'
          }
        >
          DinoLanguage
        </Link>
      </div>
      <div className={'flex flex-row'}>
        {headerSnap ? (
          <div className={'flex flex-row'}>
            <ModeToggle />
            <NavMenuMobile />
          </div>
        ) : (
          <NavMenu />
        )}
      </div>
    </div>
  );
}
