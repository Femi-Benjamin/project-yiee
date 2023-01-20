import React from 'react'

const Footer = () => {
    return (
        <div className='h-[294px] bg-[#257CFF]'>
            <div className='pl-[128px] pr-[223.25px]'>
                <div className='flex justify-between pb-[52px] border-b pt-[42px]'>
                    <div className='font-inter font-normal text-[16px] leading-[26px] text-[#ffffff99]'>
                        <h1 className='pb-[16px]'>Who we are</h1>
                        <h1 className='pb-[16px]'>What we do</h1>
                        <h1>Contact</h1>
                    </div>
                    <div className='font-inter font-normal text-[16px] leading-[26px] text-[#ffffff99]'>
                        <h1  className='pb-[16px]'>Lorem ipsum</h1>
                        <h1  className='pb-[16px]'>Lorem ipsum</h1>
                        <h1>Lorem ipsum</h1>
                    </div>
                    <div className='font-inter font-normal text-[16px] leading-[26px] text-[#ffffff99]'>
                        <h1  className='pb-[16px]'>Privacy Policy</h1>
                        <h1  className='pb-[16px]'>Terms & Conditions</h1>
                        <h1>License</h1>
                    </div>
                    <div className='font-inter font-normal text-[16px] leading-[26px] text-[#ffffff99]'>
                        <div className='flex gap-[14.98px] items-center pb-[16px]'>
                            <img src="/bx_bxl-linkedin.png" alt="" />
                            <h1>LinkedIn</h1>
                        </div>
                        <div className='flex gap-[14.98px] items-center pb-[16px]'>
                            <img src="/ant-design_twitter-outlined.png" alt="" />
                            <h1>Twitter</h1>
                        </div>
                        <div className='flex gap-[14.98px] items-center'>
                            <img src="/ant-design_instagram-filled.png" alt="" />
                            <h1>Instagram</h1>
                        </div>
                    </div>
                </div>
            </div>
                <h1 className='text-center m-[40px] font-inter text-[16px] leading-[26px] text-[#ffffff99] mb-[40px]'>© Personise 2022. All rights reserved.</h1>
        </div>
    )
}

export default Footer