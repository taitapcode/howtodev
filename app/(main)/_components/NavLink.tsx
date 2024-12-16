'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

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
const NavLink: React.FC<HeadingLinkProps> = ({
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

export default NavLink