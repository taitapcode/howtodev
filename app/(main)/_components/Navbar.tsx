import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GithubIcon, TerminalIcon } from '@/components/icons';

interface NavlinkProps extends React.PropsWithChildren {
  to: string;
}

const NavLink: React.FC<NavlinkProps> = ({ to, children }) => {
  return (
    <Button variant='link' asChild>
      <Link className='px-2' href={to}>
        {children}
      </Link>
    </Button>
  );
};

const Navbar: React.FC = async () => {
  return (
    <nav className='flex h-16 select-none items-center justify-around'>
      <Link className='group flex items-center gap-2 text-xl font-bold' href='/'>
        <TerminalIcon width={20} height={20} />
        HowToDev
      </Link>
      <div className='flex items-center gap-2'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='https://github.com/taitapcode/howtodev'>
          <GithubIcon />
          Source
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
