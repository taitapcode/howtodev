import NavLink from './NavLink'
import Link from 'next/link'
import { Github, Terminal } from '@/components/icons'

export default function Navbar() {
  return (
    <nav className='group flex select-none items-center justify-around p-4'>
      <Link className='flex items-center gap-2' href='/'>
        <Terminal
          width={32}
          height={32}
          className='text-green-500 transition-all group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]'
        />
        <h1 className='text-lg font-bold'>HowToDev</h1>
      </Link>
      <div className='flex items-center gap-3 text-sm'>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/blogs'>Blogs</NavLink>
        <Link href='https://github.com/taitapcode/howtodev'>
          <Github width={26} height={26} />
        </Link>
      </div>
    </nav>
  )
}
