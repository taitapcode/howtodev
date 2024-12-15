'use client';
import { TypeAnimation } from 'react-type-animation';

const generateTypingText = (contents: string[], delay: number) => {
  const textArray: (string | number)[] = [];
  contents.forEach((content) =>
    textArray.push(`The place I can share to you how I learned ${content}.`, delay),
  );

  return textArray;
};

const TypingText: React.FC = () => {
  return (
    <TypeAnimation
      sequence={generateTypingText(['Web Development', 'Python', 'C++'], 1000)}
      wrapper='span'
      speed={50}
      repeat={Infinity}
      className='h-8 text-lg'
    />
  );
};

export default TypingText;
