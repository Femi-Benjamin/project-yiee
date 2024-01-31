import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#257CFF] h-auto'>

      <div className='lg:px-[250px] px- md:py-[50px] py-5'>
        <div className='cursor-none'>
          <div className='grid md:grid-cols-4 grid-cols-2 place-items-center border-b font-inter font-normal md:text-xl text-base leading-[26px] text-[#ffffff99] md:pb-[52px] md:text-left text-center'>
            <div className='mb-6 md:mb-0'>
              <h1 className='md:pb-[16px] pb-2'>Who we are</h1>
              <h1 className='md:pb-[16px] pb-2'>What we do</h1>
              <h1 className=''>Contact</h1>
            </div>

            <div className='mb-6 md:mb-0'>
              <h1 className='md:pb-[16px] pb-2'>Lorem ipsum</h1>
              <h1 className='md:pb-[16px] pb-2'>Lorem ipsum</h1>
              <h1 className=''>Lorem ipsum</h1>
            </div>

            <div className='mb-6 md:mb-0'>
              <h1 className='md:pb-[16px] pb-2'>Privacy Policy</h1>
              <h1 className='md:pb-[16px] pb-2'>Terms & Conditions</h1>
              <h1 className=''>License</h1>
            </div>

            <div className=''>
              <a href=""><div className='flex md:flex-row gap-2 items-center md:pb-[16px] pb-2'>
                <img src='/bx_bxl-linkedin.png' alt='' />
                <h1>LinkedIn</h1>
              </div></a>

              <a href=""><div className='flex md:flex-row gap-2 items-center md:pb-[16px] pb-2'>
                <img src='/ant-design_twitter-outlined.png' alt='' />
                <h1>Twitter</h1>
              </div></a>

              <a href=""><div className='flex md:flex-row gap-2 items-center'>
                <img src='/ant-design_instagram-filled.png' alt='' />
                <h1>Instagram</h1>
              </div></a>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center  pb-5 md:pb-[50px] font-inter md:text-xl text-base leading-[26px] text-[#ffffff99]'>© Personise 2022. All rights reserved.</h1>
    </div>
  );
};

export default Footer;