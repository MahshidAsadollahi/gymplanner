'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';


export default function Navbar({ className }: { className: string }) {
  return (
    <div className={`flex py-6 justify-between items-center ${className} w-full`}>
      {/* LOGO */}
      <div className="w-36 md:w-40 xl:w-60">
        <Link href="/">
                <Image
                src="/images/logo.png"
                alt="Fit-Gym"
                width={70}
                height={60}
                className="rounded-3xl start-now-color"
                />
            </Link>
      </div>

      {/* LINKS */}
      <NavigationMenu className="justify-between mx-auto w-2/6 hidden md:flex">
        <NavigationMenuList>
          {/* HOME */}
          <NavigationMenuItem>
            <Link href="/">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover-line"
                size="lg"
              >
                Home
              </Button>
            </Link>
          </NavigationMenuItem>

          {/* ABOUT */}
          <NavigationMenuItem>
            <Link href="/about">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover-line"
                size="lg"
              >
                About
              </Button>
            </Link>
          </NavigationMenuItem>

           {/* Exercises */}
           <NavigationMenuItem>
            <Link href="/exercise">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover-line"
                size="lg"
              >
                Exercises
              </Button>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      

      {/* BUTTON */}
      <div className="w-36 md:w-40 xl:w-60 flex justify-end">
        <Link href="/start">
          <Button size="lg" className="rounded-3xl start-now-color">
            Free Plan
          </Button>
        </Link>
      </div>
    </div>
  );
}
