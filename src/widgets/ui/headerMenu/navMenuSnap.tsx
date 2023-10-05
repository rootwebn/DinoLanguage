import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Github, Menu } from 'lucide-react';
import ZapImage from '../../../../public/zap.svg';
import BrainImage from '../../../../public/brain.svg';
import SpeechImage from '../../../../public/speech.svg';
import PenImage from '../../../../public/pen.svg';
import * as React from 'react';
import { cn } from '@/lib/utils';
import s from '@/shared/styles/navMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../../../public/Logo.png';
import { Button } from '@/shared/ui/button';

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

export function NavMenuSnap() {
  return (
    <Sheet>
      <SheetTrigger className={'px-2'}>
        <Menu />
      </SheetTrigger>
      <SheetContent
        className={
          'w-full min-w-[250px] bg-silentWhite dark:bg-darkSpace sm:max-w-xl'
        }
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <Tabs defaultValue="aboutus" className="">
            <TabsList className={'bg-miniSilentWhite dark:bg-space'}>
              <TabsTrigger value="aboutus" className={'text-lightSpace'}>
                About Us
              </TabsTrigger>
              <TabsTrigger value="trainers" className={'text-lightSpace'}>
                Trainers
              </TabsTrigger>
              <TabsTrigger value="addition" className={'text-lightSpace'}>
                Addition
              </TabsTrigger>
              <TabsTrigger value="account" className={'text-lightSpace'}>
                Account
              </TabsTrigger>
            </TabsList>
            <TabsContent value="aboutus">
              <ul
                className={
                  'grid gap-3 rounded-sm bg-waikanaGrey p-3 dark:bg-woodsmoke md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] '
                }
              >
                <li className={'row-span-3'}>
                  <Link href={'/Introduction'}>
                    <div
                      className={
                        'flex min-h-full min-w-[250px] max-w-[300px] select-none flex-row justify-between border-waikanaGrey'
                      }
                    >
                      <Image
                        src={LogoImage}
                        alt={'Logotype Image'}
                        height={100}
                        width={100}
                      />
                      <div>
                        <div className={'text-honeyFlower'}>DinoLanguage</div>
                        <div
                          className={
                            'min-w-[3rem] max-w-[12rem] pt-2 text-black dark:text-silentWhite'
                          }
                        >
                          Unearth the Joy of Language Learning with Dinosaurs!
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>

                <ListItem
                  href="/about-us"
                  title="Introduction"
                  className={'text-lightSpace hover:text-flower'}
                  imageSrc={''}
                >
                  Explore DinoLanguage - Your Path to Language Mastery!
                </ListItem>

                <ListItem
                  href="/about-us#team"
                  title="Our Team"
                  className={'text-lightSpace hover:text-flower'}
                >
                  Meet the Team: The Brains Behind DinoLanguage!
                </ListItem>

                <ListItem
                  href="/about-us#values"
                  title="Values of Project"
                  className={'text-lightSpace hover:text-flower'}
                >
                  Explore DinoLanguage: Where Dinosaurs Meet Modern Values!
                </ListItem>
              </ul>
            </TabsContent>
            <TabsContent value="trainers">
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
                  Elevate your language skills with DinoLanguage engaging
                  flashcards!
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
                  href={'/trainers/grammar-test'}
                  title={'Grammar Test'}
                  className={'max-w-xs text-lightSpace hover:text-flower'}
                  imageSrc={PenImage}
                  widthImg={24}
                  heightImg={24}
                >
                  Test Your Grammar Skills with DinoLanguage!
                </ListItem>
              </ul>
            </TabsContent>
            <TabsContent value={'addition'}>
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
                    <Github
                      color={'#000000'}
                      className={'pl-1 dark:stroke-white'}
                    />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value={'account'}>
              <Card className={'border-miniSilentWhite bg-miniSilentWhite'}>
                <CardHeader>
                  <CardTitle>Still not signed up?</CardTitle>
                  <CardDescription className={'text-lightSpace'}>
                    Let's fix that here:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Your email</Label>
                    <Input
                      type="email"
                      id="name"
                      placeholder={'example@yourmail.com'}
                      defaultValue=""
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="@peduarte"
                      defaultValue=""
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" defaultValue="" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="passwordRepeat">Repeat password</Label>
                    <Input id="passwordRepeat" defaultValue="" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={'outline'}
                    className={
                      'mr-2 border-hash bg-hash hover:bg-silentWhite dark:border-space dark:bg-space'
                    }
                  >
                    Sign Up!
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
