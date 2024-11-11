'use client';

import { ReactNode } from 'react';
import { StepsProvider } from '@/context/steps';
import Navbar from '@/components/navbar';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <StepsProvider>
      <Navbar className="px-5 lg:w-5/6 mx-auto" />
      <div className="flex flex-col gap-10 lg:py-10">{children}</div>
    </StepsProvider>
  );
}