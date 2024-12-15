import type { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return <div className='mx-auto w-[min(95%,800px)]'>{children}</div>;
}
