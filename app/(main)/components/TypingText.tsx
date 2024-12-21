'use client'

import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

interface TypingTextProps {
  texts: string[]
  speed?: number
  delay?: number
}

export default function TypingText({ texts, speed = 50, delay = 1000 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex]
      const nextTextIndex = (currentTextIndex + 1) % texts.length
      const nextText = texts[nextTextIndex]

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          // Check if prefix of current and next text is the same
          if (nextText.startsWith(displayText)) {
            // Stop deleting and start typing the rest of the next text
            setIsDeleting(false)
            setCurrentTextIndex(nextTextIndex)
            setDisplayText(nextText.slice(0, displayText.length))
          } else {
            // Continue deleting
            setDisplayText(currentText.slice(0, displayText.length - 1))
          }
        } else {
          // Move to next text
          setIsDeleting(false)
          setCurrentTextIndex(nextTextIndex)
        }
      }
    }

    const typingTimer = setTimeout(handleTyping, speed)
    return () => clearTimeout(typingTimer)
  }, [displayText, currentTextIndex, isDeleting, texts, speed, delay])

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='flex items-center after:content-["|"]'
    >
      {displayText}
    </motion.p>
  )
}
