'use client';

import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui';
import { PersistBoundStore } from '@/shared/helpers/persistBoundStorage';
import { useEffect, useState } from 'react';

export const PresetsWordsList = () => {
  const { customList } = PersistBoundStore();
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card className={'col-span-3 row-span-1 bg-eclipseGray'}>
      <CardHeader>Your Presets of Words list</CardHeader>
      <CardContent>
        {isMounted && show && (
          <div className={'grid grid-cols-1 grid-rows-1 gap-6'}>
            {customList.map((item, index) => (
              <div key={index} className={'bg-darkerHash p-3'}>
                <div className={'pl-5 text-3xl'}>{item.listTitle}</div>
                <div className={'max-h-[50px] max-w-[100px]'}>
                  {item.listDesc}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={() => setShow(true)}>show presets</Button>
      </CardFooter>
    </Card>
  );
};
