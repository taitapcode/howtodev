import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className='text-sm text-white/90 transition-all duration-300 ease-in-out hover:text-white hover:underline'
    >
      {children}
    </Link>
  )
}
