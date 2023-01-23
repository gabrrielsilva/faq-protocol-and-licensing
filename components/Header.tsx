import Image from 'next/image';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://github.com/gabrrielsilva.png',
};

export const Header = () => {
  return (
    <header className='flex-initial pb-24 bg-[#121212]'>
      <div className='max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='relative flex items-center justify-between py-5 lg:justify-between'>
          <div>
            <a href='#'>
              <span className='sr-only'>Infinitel</span>
              <Image
                height={65}
                width={65}
                src='https://infinitel-telecom.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-infinitel.10de69e9.png&w=640&q=75'
                alt='Infinitel'
              />
            </a>
          </div>
          {/* <div className='lg:ml-4 lg:flex lg:items-center lg:pr-0.5'>
            <Image width={35} height={35} className='rounded-full' src={user.imageUrl} alt='' />
          </div> */}
        </div>
      </div>
    </header>
  );
};
