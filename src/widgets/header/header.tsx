'use client';

import { NavMenu } from '@/widgets/header/navMenu';
import Image from 'next/image';
import Logo from '../../../public/Logo.png';
import Link from 'next/link';
import * as React from 'react';
import NavMenuMobile from '@/widgets/header/navMenuMobile';

export function Header() {
  return (
    <div
      className={
        'sticky top-0 z-10 flex flex-row items-center justify-between border-b-2 border-miniSilentWhite bg-hash px-2 pb-1 pt-1 dark:border-space dark:bg-darkSpace sm:px-6 lg:px-16 2xl:px-32'
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
        <div className={'flex flex-row xlg:hidden'}>
          <NavMenuMobile />
        </div>
        <div className={'hidden xlg:flex'}>
          <NavMenu />
        </div>
      </div>
    </div>
  );
}
