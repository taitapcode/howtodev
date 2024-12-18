'use client';
import { TypeAnimation } from 'react-type-animation';

const generateTypingText = (contents: string[], delay: number) => {
  const textArray: (string | number)[] = [200];
  contents.forEach((content) =>
    textArray.push(`Where I can share with you how I learned ${content}.`, delay),
  );

  return textArray;
};

const TypingText: React.FC = () => {
  return (
    <TypeAnimation
      sequence={generateTypingText(
        [
          'HTML',
          'CSS',
          'Javascript',
          'Typescript',
          'React',
          'NextJS',
          'NodeJS',
          'Python',
          'C++',
          'Algorithms',
        ],
        1000,
      )}
      wrapper='span'
      speed={50}
      repeat={Infinity}
      className='h-8 text-lg'
    />
  );
};

export default TypingText;
