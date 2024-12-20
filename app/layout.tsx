import type { Metadata } from 'next'
import './app.css'

export const metadata: Metadata = {
  title: 'Howtodev',
  description: 'Howtodev is a platform for me to learn and share my knowledge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-background-dark text-text-dark'>{children}</body>
    </html>
  )
}
