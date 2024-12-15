import cn from '@/utils/cn';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { GithubIcon, TerminalIcon } from '@/components/icons';
import { If, Then, Else } from 'react-if';

interface NavLinkProps extends React.PropsWithChildren {
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to = '/', children }) => {
  return (
    <Link className={cn('flex items-center hover:underline')} href={to}>
      {children}
    </Link>
  );
};

const Navbar: React.FC = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <nav className='flex h-16 select-none items-center justify-around'>
      <Link className='group flex items-center gap-2 text-xl font-bold' href='/'>
        <TerminalIcon width={20} height={20} />
        HowToDev
      </Link>
      <div className='flex items-center gap-4'>
        <If condition={!user}>
          <Then>
            <Link href='/login'>Log in</Link>
            <Link href='/signup'>Sign up</Link>
          </Then>
          <Else>
            <NavLink to='/#about'>About</NavLink>
            <NavLink to='/blog'>Blogs</NavLink>
          </Else>
        </If>
        <NavLink to='https://github.com/taitapcode/howtodev'>
          <GithubIcon widths={14} height={14} />
          Soruce
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
