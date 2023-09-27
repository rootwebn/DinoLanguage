import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import Link from 'next/link';
import { Brain, Clipboard, Dot } from 'lucide-react';

export default function TrainersPage() {
  return (
    <div className={'mb-6 ml-6 mr-6 mt-6'}>
      <Card className={'bg-tequila mb-6 mt-6'}>
        <CardHeader>
          <CardTitle className={'flex flex-row text-thunderbird'}>
            <Clipboard className={'mr-1.5'} />
            Flashcards
          </CardTitle>
          <CardDescription className={'text-royalBlue'}>
            Maximize vocabulary and grammar mastery with our interactive
            flashcards!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type={'multiple'}>
            <AccordionItem value="item-1" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 1: Explore Flashcard Categories
              </AccordionTrigger>
              <AccordionContent className={'text-indigo'}>
                Browse through a variety of flashcard categories, each tailored
                to different topics and language aspects. Choose a category that
                aligns with your learning goals and interests.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 2: Start Flashcard Learning
              </AccordionTrigger>
              <AccordionContent className={'text-indigo'}>
                Click on your selected flashcard category to begin. You will see
                a flashcard with a word, phrase, or sentence in your target
                language.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 3: Understand and Memorize
              </AccordionTrigger>
              <AccordionContent className={'text-indigo'}>
                Carefully read and understand the content on the flashcard.
                Repeat the word or phrase in your mind to help with
                memorization.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 4: Review and Repeat
              </AccordionTrigger>
              <AccordionContent className={'text-indigo'}>
                Continue flipping through the flashcards in your chosen
                category. Review and repeat as necessary to reinforce your
                memory and understanding.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className={'flex flex-row justify-between'}>
          <Button
            variant={'outline'}
            className={
              'border-copperfield bg-copperfield text-white hover:border-stiletto hover:bg-stiletto'
            }
            asChild
          >
            <Link href={'/trainers/flashcards'}>Start Training!</Link>
          </Button>
          <Button
            variant={'outline'}
            className={
              'border-copperfield bg-copperfield text-white hover:border-stiletto hover:bg-stiletto'
            }
          >
            My Results
          </Button>
        </CardFooter>
      </Card>

      <Card className={'mb-6 mt-6 border-space bg-space'}>
        <CardHeader>
          <CardTitle className={'flex flex-row text-stiletto'}>
            <Brain className={'mr-1.5'} />
            Brainstorm
          </CardTitle>
          <CardDescription className={'text-veniceBlue'}>
            DinoLanguage Brainstorm challenges are not for the faint of heart.
            Designed for the boldest language learners, these challenges put
            your language skills to the test in high-pressure scenarios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type={'multiple'}>
            <AccordionItem value="item-1" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 1: Challenge Selection
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                Start by choosing a Brainstorm challenge categorized as
                difficult. These challenges are tailored for learners seeking to
                challenge themselves and improve their language skills under
                pressure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 2: Observe the Word Pool
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                These challenges not only help you master a new language but
                also open doors to exciting rewards and even new secret games!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 3: Task Randomization
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                The program will then randomly select tasks from a variety of
                options. For instance, one task might require you to write the
                word associated with an image displayed, while another task
                could involve translating a phrase or recalling the
                pronunciation of a specific word.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className={'border-b-royalBlue'}>
              <AccordionTrigger className={'text-royalBlue'}>
                Step 4: Minimal Time for Each Task
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                Be prepared to respond to each task quickly, as you will have
                minimal time to complete it. The challenges are designed to test
                your ability to recall and apply your language skills under time
                constraints.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className={'flex flex-row justify-between'}>
          <Button
            variant={'outline'}
            asChild
            className={'hover:border-black hover:bg-black hover:text-white'}
          >
            <Link href={'/'}>Start Training!</Link>
          </Button>
          <Button
            variant={'outline'}
            asChild
            className={'hover:border-black hover:bg-black hover:text-white'}
          >
            <Link href={'/'}>My Results</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className={'bg-terracotta border-terracotta mb-6 mt-6'}>
        <CardHeader>
          <CardTitle className={'text-black'}>Verbal Memory</CardTitle>
          <CardDescription className={'text-voodoo'}>
            Sharpen your verbal memory skills with engaging exercises!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type={'multiple'}>
            <AccordionItem value="item-1" className={'border-voodoo'}>
              <AccordionTrigger>Step 1: Challenge Selection</AccordionTrigger>
              <AccordionContent className={'text-stiletto'}>
                Start by selecting a Verbal Memory challenge that matches your
                current language proficiency level. Choose from various word
                recall, phrase memorization, and sentence retention exercises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={'border-voodoo'}>
              <AccordionTrigger>Step 2: Read and Understand</AccordionTrigger>
              <AccordionContent className={'text-stiletto'}>
                As the challenge begins, carefully read the word, phrase, or
                sentence presented in your target language. Take a moment to
                understand its meaning and pronunciation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={'border-voodoo'}>
              <AccordionTrigger>Step 3: Memorization Time</AccordionTrigger>
              <AccordionContent className={'text-stiletto'}>
                Memorization is key. Pay close attention to the content and
                commit it to your memory. Visualize and repeat the word, phrase,
                or sentence in your mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className={'border-voodoo'}>
              <AccordionTrigger>Step 4: Test Your Recall</AccordionTrigger>
              <AccordionContent className={'text-stiletto'}>
                Once the memorization time is up, you will be prompted to recall
                what you have just seen. Type the word, phrase, or sentence as
                accurately as possible in your target language. Do not worry if
                you make mistakes; learning is a process, and practice makes
                perfect!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className={'flex flex-row justify-between'}>
          <Button
            variant={'outline'}
            className={
              'border-hippieBlue bg-hippieBlue hover:bg-voodoo hover:border-voodoo hover:text-white'
            }
          >
            <Link href={'/'} className={'hover:text-white'}>
              Start Training!
            </Link>
          </Button>
          <Button
            variant={'outline'}
            className={
              'border-hippieBlue bg-hippieBlue hover:bg-voodoo hover:border-voodoo hover:text-white'
            }
          >
            <Link href={'/'}>My Results</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className={'bg-fruidSalad border-fruidSalad mb-6 mt-6'}>
        <CardHeader>
          <CardTitle>Grammar Test</CardTitle>
          <CardDescription className={'text-white'}>
            Test and enhance your grammar prowess with our comprehensive Grammar
            Test!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type={'multiple'}>
            <AccordionItem value="item-1" className={'border-b-java'}>
              <AccordionTrigger className={'text-java'}>
                Step 1: Challenge Selection
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                Start by choosing a Brainstorm challenge categorized as
                difficult. These challenges are tailored for learners seeking to
                challenge themselves and improve their language skills under
                pressure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={'border-b-java'}>
              <AccordionTrigger className={'text-java'}>
                Step 2: Observe the Word Pool
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                These challenges not only help you master a new language but
                also open doors to exciting rewards and even new secret games!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={'border-b-java'}>
              <AccordionTrigger className={'text-java'}>
                Step 3: Task Randomization
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                The program will then randomly select tasks from a variety of
                options. For instance, one task might require you to write the
                word associated with an image displayed, while another task
                could involve translating a phrase or recalling the
                pronunciation of a specific word.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className={'border-b-java'}>
              <AccordionTrigger className={'text-java'}>
                Step 4: Minimal Time for Each Task
              </AccordionTrigger>
              <AccordionContent className={'text-chattel'}>
                Be prepared to respond to each task quickly, as you will have
                minimal time to complete it. The challenges are designed to test
                your ability to recall and apply your language skills under time
                constraints.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className={'flex flex-row justify-between'}>
          <Button
            variant={'outline'}
            className={
              'hover:border-silentWhite hover:bg-silentWhite border-white bg-white'
            }
          >
            <Link href={'/'}>Start Training!</Link>
          </Button>
          <Button
            variant={'outline'}
            className={
              'hover:bg-silentWhite hover:border-silentWhite border-white bg-white'
            }
          >
            <Link href={'/'}>My Results</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
