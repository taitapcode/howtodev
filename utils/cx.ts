import type { ClassArray } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cx = (...classes: ClassArray) => twMerge(clsx(classes));
export default cx;
