interface GlowingTextProps {
  children: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children }) => {
  return (
    <div>
      <span className='absolute mx-auto box-content flex w-fit select-none border bg-gradient-to-r from-green-500 to-teal-700 bg-clip-text py-4 text-center font-extrabold text-transparent blur-xl'>
        {children}
      </span>
      <p className='relative top-0 flex h-auto w-fit select-auto items-center justify-center bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text py-4 text-center font-extrabold text-transparent'>
        {children}
      </p>
    </div>
  );
};

export default GlowingText;
