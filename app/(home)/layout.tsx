import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'animate.css';
import Script from 'next/script';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fit-Gym',
  description: 'Free fitness program generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/logo.png" />
        <Script id="miscrosoft-clarity" type="text/javascript">
          {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jf0voculqt");`}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-white text-neutral-800 mx-auto w-full overflow-x-hidden min-h-screen`}
      >
        <ClientLayout>{children}</ClientLayout>

      </body>
    </html>
  );
}
