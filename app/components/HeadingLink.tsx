'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('grid place-items-center rounded-sm px-7 py-3', {
  variants: {
    variant: {
      default: 'bg-emerald-500 hover:bg-emerald-600',
      outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10',
    },
  },
})

interface HeadingLinkProps extends VariantProps<typeof buttonVariants> {
  href: string
  children: React.ReactNode
  delay?: number
}

const MotionLink = motion.create(Link)
export default function HeadingLink({
  href,
  variant = 'default',
  children,
  delay = 0,
}: HeadingLinkProps) {
  return (
    <MotionLink
      className={cn(buttonVariants({ variant }))}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      href={href}
    >
      {children}
    </MotionLink>
  )
}
