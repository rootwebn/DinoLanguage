"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/shared/ui/navigation-menu";
import {Skeleton} from "@/shared/ui/skeleton"
import * as React from "react";
import Link from "next/link";
import {Button} from "@/shared/ui/button";
import s from "@/shared/styles/navMenu.module.scss";
import {cn} from '@/lib/utils';
import Image from 'next/image';
import {Github} from "lucide-react";
import LogoImage from '../../../../public/Logo.png';

const ListItem = React.forwardRef<
   React.ElementRef<"a">,
   React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
  return (
     <li>
       <NavigationMenuLink asChild>
         <a
            ref={ref}
            className={cn(
               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
               className
            )}
            {...props}
         >
           <div className="text-sm font-medium leading-none">{title}</div>
           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
             {children}
           </p>
         </a>
       </NavigationMenuLink>
     </li>
  )
})
ListItem.displayName = "ListItem"

export function NavMenu() {
  return (
     <NavigationMenu>
       <NavigationMenuList>
         <NavigationMenuItem>
           <NavigationMenuTrigger className={s.navMenuItem}>
             About Us
           </NavigationMenuTrigger>
           <NavigationMenuContent>
             <ul className={"grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]"}>
               <li className={"row-span-3"}>
                 <Link href={"/Introduction"}>
                   <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${'flex h-full w-full select-none flex-col justify-end rounded-md outline-none min-h-640 bg-gradient-to-b from-black from-20% to-thunder'}`}>
                     <div
                        className={`${s.projectDescContainer} ${'flex min-h-full select-none flex-col justify-end '}`}>
                       <Image src={LogoImage} alt={'Logotype Image'} height={150} width={170}/>
                       <div className={`${s.projectTitle} ${'mt-4'}`}>DinoLanguage</div>
                       <div className={`${s.projectDesc} ${"text-muted-foreground"}`}>
                         Unearth the Joy of Language Learning with Dinosaurs!
                       </div>
                     </div>
                   </NavigationMenuLink>
                 </Link>
               </li>
               <ListItem href="/about-us" title="Introduction">
                 Explore DinoLanguage - Your Path to Language Mastery!
               </ListItem>
               <ListItem href="/about-us#team" title="Our Team">
                 Meet the Team: The Brains Behind DinoLanguage!
               </ListItem>
               <ListItem href="/about-us#values" title="Values of Project">
                 Explore DinoLanguage: Where Dinosaurs Meet Modern Values!
               </ListItem>
             </ul>
           </NavigationMenuContent>
         </NavigationMenuItem>

         <NavigationMenuItem>
           <NavigationMenuTrigger>Trainers</NavigationMenuTrigger>
           <NavigationMenuContent>
             <Link href={"/"}>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                 Test2
               </NavigationMenuLink>
             </Link>
           </NavigationMenuContent>
         </NavigationMenuItem>

         <NavigationMenuItem>
           <NavigationMenuTrigger>Recomendations</NavigationMenuTrigger>
           <NavigationMenuContent>
             <Link href={"/"}>
               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                 Test3
               </NavigationMenuLink>
             </Link>
           </NavigationMenuContent>
         </NavigationMenuItem>
       </NavigationMenuList>

       <Button variant={"outline"} className={s.navMenuButton}>
         Sign In
       </Button>

       <Button variant={'outline'} className={s.navMenuButton}>
         <Github/>
       </Button>
     </NavigationMenu>
);
}
