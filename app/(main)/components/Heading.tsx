'use client'

import { motion } from 'framer-motion'

export default function Heading() {
  return (
    <motion.div
      className='flex flex-wrap items-center justify-center gap-3 text-5xl'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <p>Welcome to</p>
      <h1 className='bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text font-bold text-transparent transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]'>
        HowToDev
      </h1>
    </motion.div>
  )
}
