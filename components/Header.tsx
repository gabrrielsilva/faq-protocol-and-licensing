import Image from 'next/image';

export const Header = () => {
  return (
    <header className='flex justify-center flex-initial w-full h-20 px-6 shadow-md bg-black/30'>
      <div className='flex items-center justify-between w-full h-full max-w-7xl'>
        <figure className='relative w-16 h-full'>
          <Image fill className='object-contain' src="https://infinitel-telecom.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-infinitel.10de69e9.png&w=640&q=75" alt='Infinitel' />
        </figure>
        <h1 className='text-xl text-white font-matterSemibold'>FAQ</h1>
      </div>
    </header>
  );
};