import type { Metadata } from 'next';
import GlowingText from './_components/GlowingText';
import TypingText from './_components/TypingText';

export const metadata: Metadata = {
  title: 'HowToDev - Home',
};

export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className='flex h-96 flex-col items-center justify-center'>
        <div className='flex items-center gap-3 text-6xl'>
          <span className='font-bold'>Wellcome to</span>
          <GlowingText>HowToDev</GlowingText>
        </div>
        <TypingText />
      </div>
    </div>
  );
}
