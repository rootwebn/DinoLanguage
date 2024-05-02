import * as React from 'react';
import { Button } from '@/shared/ui/button';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/';
import { AccountMenu } from '@/entities/auth';
import { Dessert, Goal } from 'lucide-react';
import Link from 'next/link';

interface SignUpInterface {
  iconSrc: JSX.Element;
  className: string | undefined;
  linkHref: string;
  buttonText: string;
}
const SignUpOption: React.FC<SignUpInterface> = ({
  className,
  iconSrc,
  linkHref,
  buttonText,
}) => {
  return (
    <Button
      asChild={true}
      className={cn('flex flex-row items-center justify-center', className)}
    >
      <Link
        href={linkHref}
        className={'flex flex-row items-center justify-around'}
      >
        <div>{iconSrc}</div>
        {buttonText}
      </Link>
    </Button>
  );
};

export const SignUpSheet = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={
          'group group mr-1 inline-flex h-10 w-max items-center justify-center rounded-md bg-silentWhite px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 dark:border-space dark:bg-space dark:text-white'
        }
      >
        Your Profile
      </DialogTrigger>
      <DialogContent className={'bg-silentWhite dark:bg-darkSpace'}>
        <DialogHeader className={'mt-4'}>
          <DialogTitle className={'absolute top-0 mt-4'}>Sign Up</DialogTitle>
          <AccountMenu />
          <div
            className={'mb-2 mt-2 text-center text-black dark:text-lightSpace'}
          >
            Or you can sign up below:
          </div>
          <div className={'flex flex-row items-center justify-around'}>
            <SignUpOption
              iconSrc={<Goal className={'mr-1'} />}
              className={
                'mr-2 border-hash bg-hash text-black dark:border-darkSpace dark:bg-space dark:text-chattel hover:dark:border-lightSpace hover:dark:bg-lightSpace'
              }
              linkHref={'/profile'}
              buttonText={'Sign up with Google Account'}
            />
            <SignUpOption
              iconSrc={<Dessert className={'mr-1'} />}
              className={
                'ml-2 border-hash bg-hash text-black dark:border-darkSpace dark:bg-space dark:text-chattel hover:dark:border-lightSpace hover:dark:bg-lightSpace'
              }
              linkHref={'/github'}
              buttonText={'Sign up with GitHub Account'}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
