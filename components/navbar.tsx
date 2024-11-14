'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export default function Navbar({ className }: { className: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <div className={`flex py-6 justify-between items-center ${className} w-full`}>
      {/* LOGO (visible on larger screens) */}
      <div className="w-36 md:w-40 xl:w-60 hidden md:block">
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

      {/* Mobile Hamburger Menu (visible only on smaller screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className={`hamburger ${isMenuOpen ? 'Diam' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      {/* LINKS */}
      <NavigationMenu className="justify-between mx-auto w-2/6 hidden md:flex">
        <NavigationMenuList>
          {/* HOME */}
          <NavigationMenuItem>
            <Link href="/" onClick={closeMenu}>
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
            <Link href="/about" onClick={closeMenu}>
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
            <Link href="/exercise" onClick={closeMenu}>
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

      {/* Mobile Menu (shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/40 backdrop-blur-md p-4 shadow-md z-50">
          <div className="flex flex-col justify-center items-center">
            <Link href="/" onClick={closeMenu}>
              <Button
                variant="ghost"
                className="text-lg font-semibold mx-2 my-3 text-left rounded-xl"
                size="lg"
              >
                Home
              </Button>
            </Link>
            <Link href="/about" onClick={closeMenu}>
              <Button
                variant="ghost"
                className="text-lg font-semibold mx-2 my-3 text-left rounded-xl"
                size="lg"
              >
                About
              </Button>
            </Link>
            <Link href="/exercise" onClick={closeMenu}>
              <Button
                variant="ghost"
                className="text-lg font-semibold mx-2 my-3 text-left rounded-xl"
                size="lg"
              >
                Exercises
              </Button>
            </Link>
          </div>
        </div>
      )}

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