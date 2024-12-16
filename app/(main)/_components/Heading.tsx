'use client';
import { motion } from 'motion/react';

interface GlowingTextProps {
  children: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children }) => {
  return (
    <div>
      <span className='absolute mx-auto box-content flex w-fit select-none border bg-gradient-to-r from-green-500 to-teal-700 bg-clip-text py-4 text-center font-extrabold text-transparent blur-xl'>
        {children}
      </span>
      <p className='relative top-0 flex h-auto w-fit select-auto items-center justify-center bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text py-4 text-center font-extrabold text-transparent'>
        {children}
      </p>
    </div>
  );
};

const Heading: React.FC = () => {
  return (
    <motion.div
      className='flex flex-wrap items-center justify-center gap-4 text-6xl'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <span className='font-bold'>Welcome to</span>
      <GlowingText>HowToDev</GlowingText>
    </motion.div>
  );
};

export default Heading;
