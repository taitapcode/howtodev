import type { PropsWithChildren } from 'react';
import Navbar from './_components/Navbar';

export default async function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className='mx-auto w-[min(95%,800px)]'>{children}</div>
    </>
  );
}
