import Link from 'next/link'

export default function Home() {
  return (
    <div className='container px-4 py-8 mx-auto'>
      <h1 className='mb-6 text-4xl font-bold text-center'>Welcome to My Next.js App</h1>
      <div className='max-w-2xl mx-auto text-center'>
        <p className='mb-4 text-xl'>
          This is a simple home page created with Next.js and Tailwind CSS.
        </p>
        <div className='flex justify-center space-x-4'>
          <Link
            href='/about'
            className='px-4 py-2 text-white transition-colors rounded-md bg-zinc-900 hover:bg-zinc-700'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='px-4 py-2 transition-colors border rounded-md border-zinc-900 text-zinc-900 hover:bg-zinc-100'
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
