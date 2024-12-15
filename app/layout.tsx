import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import './app.css';

export const metadata: Metadata = {
  title: 'Howtodev',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className='h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-no-repeat text-white'>
        {children}
      </body>
    </html>
  );
}
