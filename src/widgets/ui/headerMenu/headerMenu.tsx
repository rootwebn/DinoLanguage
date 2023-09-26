import { NavMenu } from '@/widgets/ui/headerMenu/navMenu';
import { ModeToggle } from '@/features/themeSwitcher';
import Image from 'next/image';
import Logo from '../../../../public/Logo.png';
import s from '@/shared/styles/headerMenu.module.scss';

export function HeaderMenu() {
  return (
    <div className={s.menuContainer}>
      <div className={s.menuLogo}>
        <Image src={Logo} alt={'logo'} height={70} width={70} />
        <div
          className={`${
            s.logoTitle
          } ${'scroll-m-20 text-2xl font-semibold tracking-tight'}`}
        >
          DinoLanguage
        </div>
      </div>
      <div className={s.navMenuContainer}>
        <NavMenu />
        <ModeToggle />
      </div>
    </div>
  );
}
