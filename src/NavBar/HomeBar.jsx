import React from 'react'

const HomeBar = () => {
  return (
    <nav className='w-screen h-[100px] bgn'>
      <div className='md:pl-[101px] md:pr-[128px]'>
        <div className=' h-[100px] flex justify-between items-center'>

          <div className='flex gap-[20px] items-center'>
            <img src="/Personarise logo 1.png" alt="" />
            <h1 className='not-italic font-bold text-[32px] leading-[37px] text-black'>Personarise</h1>
          </div>

          <div className='not-italic font-inter font-normal text-[18px] leading-[26px] text-black'>
            <ul className='hidden md:flex justify-between items-center gap-[38px] cursor-pointer'>
              <li>Who we are</li>
              <li>What we do</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='flex gap-[16px]'>
            <button className='flex w-[202px] h-[58px] bg-[#C2DBFF] rounded-[8px] items-center justify-center gap-[10.03px]'>
              <img src="/play-circle.png" alt="" />
              <p className='not-italic font-inter font-normal text-[18px] leading-[26px] text-[#257CFF]'>Watch a demo</p>
            </button>
            <button className='w-[112px] h-[58px] bg-[#257CFF] rounded-[8px] items-center font-inter font-normal text-[18px] leading-[26px] text-white'>
              Sign up
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default HomeBar