import type { SVGProps } from 'react';

const Terminal: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={16}
      height={16}
      viewBox='0 0 16 16'
      {...props}
    >
      <g fill='none' stroke='#a6da95' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M2 15.5c-.7 0-1.5-.8-1.5-1.5V5c0-.7.8-1.5 1.5-1.5h9c.7 0 1.5.8 1.5 1.5v9c0 .7-.8 1.5-1.5 1.5z'></path>
        <path d='m1.2 3.8l3.04-2.5S5.17.5 5.7.5h8.4c.66 0 1.4.73 1.4 1.4v7.73a2.7 2.7 0 0 1-.7 1.75l-2.68 3.51M3 8.5l3 2l-3 2'></path>
      </g>
    </svg>
  );
};

export default Terminal;
