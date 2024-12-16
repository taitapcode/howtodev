import type { Metadata } from 'next';
import Heading from './_components/Heading';
import TypingText from './_components/TypingText';
import NavLink from './_components/NavLink';

export const metadata: Metadata = {
  title: 'HowToDev - Home',
};

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-7 mt-52 flex flex-col items-center justify-center'>
        <Heading />
        <TypingText />
      </div>
      <div className='flex gap-10'>
        <NavLink to='/about' delay={0.2}>
          About me
        </NavLink>
        <NavLink to='/blogs' delay={0.3} variant='outline'>
          Blogs
        </NavLink>
      </div>
    </div>
  );
}
