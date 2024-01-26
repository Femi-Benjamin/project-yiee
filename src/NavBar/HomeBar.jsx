import React, { useState } from 'react';

const HomeBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='w-full h-[100px] bg-neutral-10 shadow-md md:shadow'>
      <div className='px-8 lg:px-[100px]'>
        <div className='h-[100px] flex justify-between items-center'>

          <div className='flex gap-12 items-center cursor-pointer'>
            <img src="/Personarise logo 1.png" alt="" />
            <h1 className='not-italic font-bold text-[30px] md:text-[36px] leading-[28px] md:leading-[37px] text-black'>
              Personarise
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <div className='flex md:hidden items-center pl-20'>
            <button onClick={toggleMenu} className='focus:outline-none'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            </button>
          </div>
          {/* End Hamburger Menu Button */}

          {/* Navigation Links for Desktop */}
          <div className='hidden md:flex not-italic font-inter font-normal text-[18px] leading-[26px] text-black'>
            <ul className='flex justify-between items-center gap-4'>
              <li className='cursor-pointer'>Who we are</li>
              <li className='cursor-pointer'>What we do</li>
              <li className='cursor-pointer'>Contact</li>
            </ul>
          </div>
          {/* End Navigation Links for Desktop */}

          {/* Buttons for Both Screens */}
          <div className='flex gap-4 items-center'>
            <button className='hidden md:flex w-[202px] h-[58px] bg-[#C2DBFF] rounded-[8px] items-center justify-center gap-[10.03px]'>
              <img src="/play-circle.png" alt="" className='w-6 h-6' />
              <p className='not-italic font-inter font-normal text-[14px] leading-[20px] text-[#257CFF]'>
                Watch a demo
              </p>
            </button>

            <button className='md:block hidden w-[112px] h-[58px] bg-[#257CFF] rounded-[8px] items-center font-inter font-normal text-[14px] leading-[20px] text-white'>
              Sign up
            </button>
          </div>
          {/* End Buttons for Both Screens */}
        </div>
      </div>

      {/* Hamburger Menu */}
      {menuOpen && (
        <div className='md:hidden bg-gray-500 translate-x-0 translate-y-0'>
          <ul className='flex flex-col items-center gap-4 py-4 text-white'>
            <li className='cursor-pointer'>Who we are</li>
            <li className='cursor-pointer'>What we do</li>
            <li className='cursor-pointer'>Contact</li>
            <li>
              <button className='w-[202px] h-[58px] bg-[#C2DBFF] rounded-[8px] items-center justify-center gap-[10.03px] flex'>
                <img src="/play-circle.png" alt="" className='w-6 h-6' />
                <p className='not-italic font-inter font-normal text-[14px] leading-[20px] text-[#257CFF]'>
                  Watch a demo
                </p>
              </button>
            </li>
            <li>
              <button className='w-[112px] h-[58px] bg-[#257CFF] rounded-[8px] items-center font-inter font-normal text-[14px] leading-[20px] text-white'>
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
      {/* End Hamburger Menu */}
    </nav>
  );
};

export default HomeBar;

