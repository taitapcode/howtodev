'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

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
      className='flex items-center gap-3 text-6xl'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <span className='font-bold'>Welcome to</span>
      <GlowingText>HowToDev</GlowingText>
    </motion.div>
  );
};

const headingLinkVarients = cva(
  'px-5 py-3 w-32 flex justify-center items-center font-bold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-emerald-500 hover:bg-emerald-700',
        outline:
          'border-2 border-emerald-500 text-emerald-500 hover:border-emerald-700 hover:text-emerald-700',
      },
    },
  },
);
interface HeadingLinkProps
  extends React.PropsWithChildren,
    VariantProps<typeof headingLinkVarients> {
  to: string;
  delay: number;
}

const MotionLink = motion.create(Link);
export const HeadingLink: React.FC<HeadingLinkProps> = ({
  to,
  delay,
  variant = 'default',
  children,
}) => {
  return (
    <MotionLink
      className={cn(headingLinkVarients({ variant }))}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, ease: 'easeInOut', duration: 0.75 }}
      href={to}
    >
      {children}
    </MotionLink>
  );
};

export default Heading;
