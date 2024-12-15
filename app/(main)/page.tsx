import type { Metadata } from 'next';
import Heading, { HeadingLink } from './_components/Heading';
import TypingText from './_components/TypingText';

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
        <HeadingLink to='/about' delay={0.2}>
          About me
        </HeadingLink>
        <HeadingLink to='/blogs' delay={0.3} variant='outline'>
          Blogs
        </HeadingLink>
      </div>
    </div>
  );
}
