import { NavMenu } from '@/widgets/ui/headerMenu/navMenu';
import { ModeToggle } from '@/features/themeSwitcher';
import Image from 'next/image';
import Logo from '../../../../public/Logo.png';
import Link from 'next/link';

export function HeaderMenu() {
  return (
    <div
      className={
        'bg-hash sticky top-0 flex flex-row items-center justify-between px-20 pt-2'
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
        <NavMenu />
        <ModeToggle />
      </div>
    </div>
  );
}
