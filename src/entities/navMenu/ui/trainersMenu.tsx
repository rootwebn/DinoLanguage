import * as React from 'react';
import { ListItem } from '@/entities/navMenu/ui/listItem';
import ZapImage from '../../../../public/zap.svg';
import BrainImage from '../../../../public/brain.svg';
import SpeechImage from '../../../../public/speech.svg';
import PenImage from '../../../../public/pen.svg';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/shared/ui/navigation-menu';

export function TrainersMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={'bg-silentWhite text-black dark:bg-space dark:text-white'}
      >
        Trainers
      </NavigationMenuTrigger>
      <NavigationMenuContent className={'bg-waikanaGrey dark:bg-woodsmoke'}>
        <ul
          className={
            'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
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
            Elevate your language skills with DinoLanguage engaging flashcards!
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
            href={'/trainers/grammar-test-test'}
            title={'Grammar Test'}
            className={'max-w-xs text-lightSpace hover:text-flower'}
            imageSrc={PenImage}
            widthImg={24}
            heightImg={24}
          >
            Test Your Grammar Skills with DinoLanguage!
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export function TrainersMenuMobile() {
  return (
    <ul
      className={
        'grid gap-3 rounded-md bg-space p-0 text-left uxs:max-w-[340px] ulxs:max-w-none xs:grid-cols-2 md:min-w-[550px] lg:min-w-[600px]'
      }
    >
      <ListItem
        href={'/trainers'}
        title={'All Trainers'}
        className={'text-lightSpace hover:text-flower'}
        imageSrc={ZapImage}
        widthImg={24}
        heightImg={24}
      >
        Discover the full range of DinoLanguage trainers!
      </ListItem>

      <ListItem
        href={'/trainers/flashcards'}
        title={'Flashcards'}
        className={'text-lightSpace hover:text-flower'}
        imageSrc={ZapImage}
        widthImg={24}
        heightImg={24}
      >
        Elevate your language skills with DinoLanguage engaging flashcards!
      </ListItem>

      <ListItem
        href={'/trainers/brainstorm'}
        title={'Brainstorm'}
        className={'text-lightSpace hover:text-flower'}
        imageSrc={BrainImage}
        widthImg={24}
        heightImg={24}
      >
        Explore DinoLanguage Brainstorm for a Creative Challenge!
      </ListItem>

      <ListItem
        href={'/trainers/verbal-memory'}
        title={'Verbal Memory'}
        className={'text-lightSpace hover:text-flower'}
        imageSrc={SpeechImage}
        widthImg={24}
        heightImg={24}
      >
        Boost Your Verbal Memory with DinoLanguage!
      </ListItem>

      <ListItem
        href={'/trainers/grammar-test'}
        title={'Grammar Test'}
        className={'text-lightSpace hover:text-flower'}
        imageSrc={PenImage}
        widthImg={24}
        heightImg={24}
      >
        Test Your Grammar Skills with DinoLanguage!
      </ListItem>
    </ul>
  );
}
