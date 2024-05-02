'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import React from 'react';
import { DictionaryEntry } from '@/shared/api/wordInfo';

export const WordInfoCard: React.FC<DictionaryEntry> = ({
  wordTranslate,
  word,
  meanings,
  phonetics,
}) => {
  return (
    <Card className={''}>
      <CardHeader>Information about your word!</CardHeader>
      <CardContent className={'flex flex-col gap-2'}>
        <div className={''}>Word: {word}</div>
        <div className={''}>Translation: {wordTranslate}</div>
        <div className={'flex flex-row gap-1'}>
          Meaning:
          {meanings.length >= 0 && (
            <div key={0}>
              <div>
                {meanings[0].definitions.length >= 0 && (
                  <div key={0}>
                    <div>{meanings[0].definitions[0].definition}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={'flex flex-row items-center gap-2'}>
          Phonetics:
          {phonetics.length > 0 ? (
            <div key={0}>
              <div>
                {phonetics[0].audio !== '' ? (
                  <audio src={phonetics[0].audio} controls />
                ) : (
                  <>
                    {phonetics[1].audio !== '' ? (
                      <audio src={phonetics[1].audio} controls />
                    ) : (
                      <p>No audio found.</p>
                    )}
                  </>
                )}
              </div>
            </div>
          ) : (
            <div>No Phonetic information found :(</div>
          )}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
