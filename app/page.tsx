import Link from 'next/link'

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-6 text-center text-4xl font-bold'>Welcome to My Next.js App</h1>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='mb-4 text-xl'>
          This is a simple home page created with Next.js and Tailwind CSS.
        </p>
        <div className='flex justify-center space-x-4'>
          <Link
            href='/about'
            className='rounded-md bg-zinc-900 px-4 py-2 text-white transition-colors hover:bg-zinc-700'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='rounded-md border border-zinc-900 px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-100'
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
