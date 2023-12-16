import * as React from 'react';
import { ListItem } from '@/entities/navMenu/ui/';
import ZapImage from '../../../../public/zap.svg';
import BrainImage from '../../../../public/brain.svg';
import SpeechImage from '../../../../public/speech.svg';
import PenImage from '../../../../public/pen.svg';

export function TrainersMenu() {
  return (
    <ul
      className={
        'grid min-w-[400px] gap-3 p-0 xs:grid-cols-2 md:w-[526px] xlg:p-2 xl:w-[600px]'
      }
    >
      <ListItem
        href={'/trainers'}
        title={'All Trainers'}
        className={
          'max-w-xs bg-miniSilentWhite text-lightSpace hover:text-flower dark:bg-inherit hover:dark:bg-space'
        }
        imageSrc={ZapImage}
        widthImg={24}
        heightImg={24}
      >
        Discover the full range of DinoLanguage trainers!
      </ListItem>

      <ListItem
        href={'/trainers/flashcards'}
        title={'Flashcards'}
        className={
          'max-w-xs bg-miniSilentWhite text-lightSpace hover:text-flower dark:bg-inherit hover:dark:bg-space'
        }
        imageSrc={ZapImage}
        widthImg={24}
        heightImg={24}
      >
        Elevate your language skills with DinoLanguage engaging flashcards!
      </ListItem>

      <ListItem
        href={'/trainers/brainstorm'}
        title={'Brainstorm'}
        className={
          'max-w-xs bg-miniSilentWhite text-lightSpace hover:text-flower dark:bg-inherit hover:dark:bg-space'
        }
        imageSrc={BrainImage}
        widthImg={24}
        heightImg={24}
      >
        Explore DinoLanguage Brainstorm for a Creative Challenge!
      </ListItem>

      <ListItem
        href={'/trainers/verbal-memory'}
        title={'Verbal Memory'}
        className={
          'max-w-xs bg-miniSilentWhite text-lightSpace hover:text-flower dark:bg-inherit hover:dark:bg-space'
        }
        imageSrc={SpeechImage}
        widthImg={24}
        heightImg={24}
      >
        Boost Your Verbal Memory with DinoLanguage!
      </ListItem>

      <ListItem
        href={'/trainers/grammar-test-test'}
        title={'Grammar Test'}
        className={
          'max-w-xs bg-miniSilentWhite text-lightSpace hover:text-flower dark:bg-inherit hover:dark:bg-space'
        }
        imageSrc={PenImage}
        widthImg={24}
        heightImg={24}
      >
        Test Your Grammar Skills with DinoLanguage!
      </ListItem>
    </ul>
  );
}
