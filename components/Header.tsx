import { Menu, Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://github.com/gabrrielsilva.png',
};

const userNavigation = [{ name: 'Sign out', href: '#' }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Header = () => {
  return (
    <Popover as='header' className='flex-initial pb-24 bg-[#121212]'>
      <div className='max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='relative flex items-center justify-center py-5 lg:justify-between'>
          {/* Logo */}
          <div>
            <a href='#'>
              <span className='sr-only'>Workflow</span>
              <img
                className='w-auto h-14'
                src='https://infinitel-telecom.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-infinitel.10de69e9.png&w=640&q=75'
                alt='Workflow'
              />
            </a>
          </div>

          {/* Right section on desktop */}
          <div className='hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5'>
            {/* Profile dropdown */}
            <Menu as='div' className='relative flex-shrink-0 ml-4'>
              <div>
                <Menu.Button className='flex text-sm bg-white rounded-full ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100'>
                  <span className='sr-only'>Open user menu</span>
                  <img className='w-8 h-8 rounded-full' src={user.imageUrl} alt='' />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute z-40 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg -right-2 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Search */}
          <div className='flex-1 min-w-0 px-5 lg:hidden'>
            <div className='w-full max-w-xs mx-auto'>
              <label htmlFor='desktop-search' className='sr-only'>
                Search
              </label>
              <div className='relative text-white focus-within:text-gray-600'>
                <input
                  id='desktop-search'
                  className='block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white bg-white border border-transparent rounded-md bg-opacity-20 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm'
                  placeholder='Search'
                  type='search'
                  name='search'
                />
              </div>
            </div>
          </div>

          <button className='flex text-sm bg-white rounded-full sm:hidden ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100'>
            <span className='sr-only'>Open user menu</span>
            <img className='w-8 h-8 rounded-full' src={user.imageUrl} alt='' />
          </button>
        </div>
        <div className='hidden py-5 border-t border-white lg:block border-opacity-20'>
          <div className='w-full max-w-sm ml-auto'>
            <label htmlFor='mobile-search' className='sr-only'>
              Search
            </label>
            <div className='relative text-white focus-within:text-gray-600'>
              <input
                id='mobile-search'
                className='block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white bg-white border rounded-md border-white/20 bg-opacity-20 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm'
                placeholder='Search'
                type='search'
                name='search'
              />
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
};
