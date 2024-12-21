import React from 'react'
import type { SVGProps } from 'react'

export function Terminal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={16}
      height={16}
      viewBox='0 0 16 16'
      {...props}
    >
      <path
        fill='currentColor'
        d='M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM7.25 8a.75.75 0 0 1-.22.53l-2.25 2.25a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L5.44 8L3.72 6.28a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215l2.25 2.25c.141.14.22.331.22.53m1.5 1.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5'
      ></path>
    </svg>
  )
}