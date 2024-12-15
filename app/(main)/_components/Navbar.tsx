import cx from '@/utils/cx';
import Link from 'next/link';
import { GithubIcon, TerminalIcon } from '@/app/_components/icons';

const NavLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  href = '/',
  children,
}) => {
  return (
    <Link className={cx('flex items-center hover:underline')} href={href}>
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className='flex h-16 select-none items-center justify-around'>
      <Link className='group flex items-center gap-2 text-xl font-bold' href='/'>
        <TerminalIcon width={20} height={20} />
        HowToDev
      </Link>
      <div className='flex items-center gap-4'>
        <NavLink href='/#about'>About</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/blog'>Blogs</NavLink>
        <NavLink
          className='flex items-center gap-0.5'
          href='https://github.com/taitapcode'
        >
          <GithubIcon widths={14} height={14} />
          Soruce
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
