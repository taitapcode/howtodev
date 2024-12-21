import Link from 'next/link'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className='text-sm text-white/90 transition-all duration-300 ease-in-out hover:text-white hover:underline'
    >
      {children}
    </Link>
  )
}
