import type { Metadata } from 'next'
import './app.css'
import Navbar from './components/Navbar'

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
      <body className='h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
