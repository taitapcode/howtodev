'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('grid w-20 place-items-center rounded-none px-4 py-2', {
  variants: {
    variant: {
      default: '!bg-emerald-500',
      outline: 'border-2 border-emerald-500 text-emerald-500',
    },
  },
})

interface HeadingLinkProps extends VariantProps<typeof buttonVariants> {
  href: string
  children: React.ReactNode
  delay?: number
}

export default function HeadingLink({
  href,
  variant = 'default',
  children,
  delay = 0,
}: HeadingLinkProps) {
  return (
    <motion.div
      className={cn(buttonVariants({ variant }))}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href}>{children}</Link>
    </motion.div>
  )
}
