'use client';

import { NavMenu } from '@/widgets/ui/headerMenu/navMenu';
import { NavMenuSnap } from '@/widgets/ui/headerMenu/navMenuSnap';
import Image from 'next/image';
import Logo from '../../../../public/Logo.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ModeToggle } from '@/features/themeSwitcher';
import * as React from 'react';

export function HeaderMenu() {
  const [headerSnap, setHeaderSnap] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
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
        'sticky top-0 flex flex-row items-center justify-between bg-hash px-2 pt-2 dark:bg-darkSpace xl:px-16'
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
        {!headerSnap && <NavMenu />}
        {headerSnap && (
          <div className={'flex flex-row'}>
            <ModeToggle />
            <NavMenuSnap />
          </div>
        )}
      </div>
    </div>
  );
}
