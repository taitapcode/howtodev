import Heading from './components/Heading'
import TypingText from './components/TypingText'
import HeadingLink from './components/HeadingLink'

const generateTexts = (prefix: string, texts: string[]) => {
  return texts.map(text => `${prefix} ${text}`)
}
const texts = generateTexts('The platform where I can share with you how I learn', [
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'Python',
  'Algorithms',
  'Data Structures',
])

export default function Home() {
  return (
    <div className='mt-5 flex h-2/3 flex-col items-center justify-center gap-4'>
      <Heading />
      <TypingText texts={texts} />
      <div className='mt-3 flex gap-4'>
        <HeadingLink variant='default' href='/about'>
          About
        </HeadingLink>
        <HeadingLink variant='outline' href='/blogs' delay={0.1}>
          Blogs
        </HeadingLink>
      </div>
    </div>
  )
}
