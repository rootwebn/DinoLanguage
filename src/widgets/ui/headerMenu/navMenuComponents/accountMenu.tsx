import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import * as React from 'react';

export function AccountMenu() {
  return (
    <Card
      className={
        'border-miniSilentWhite bg-miniSilentWhite dark:border-space dark:bg-space'
      }
    >
      <CardHeader>
        <CardTitle>Still not signed up?</CardTitle>
        <CardDescription className={'text-lightSpace dark:text-woodsmoke'}>
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
          <Input id="username" placeholder="@peduarte" defaultValue="" />
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
            'mr-2 border-hash bg-hash hover:bg-silentWhite dark:border-space dark:bg-darkSpace dark:hover:border-miniSilentWhite dark:hover:bg-miniSilentWhite'
          }
        >
          Sign Up!
        </Button>
      </CardFooter>
    </Card>
  );
}
