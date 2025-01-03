import NavLink from './NavLink'
import Link from 'next/link'
import { Github, Terminal } from '@/components/icons'

export default function Navbar() {
  return (
    <nav className='flex select-none items-center justify-around p-4'>
      <Link className='group flex items-center gap-2' href='/'>
        <Terminal
          width={32}
          height={32}
          className='text-green-500 transition-all duration-500 group-hover:drop-shadow-[0px_0px_15px_rgb(34,197,94)]'
        />
        <h1 className='text-lg font-bold'>HowToDev</h1>
      </Link>
      <div className='flex items-center gap-5 text-sm'>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/blogs'>Blogs</NavLink>
        <Link href='https://github.com/taitapcode/howtodev'>
          <Github width={26} height={26} />
        </Link>
      </div>
    </nav>
  )
}
