import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState("")

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setData(email);
    console.log(data)
  }
  
	return (
		<div className='h-[760px] bg bg-center bg-no-repeat'>
			<div className='text-center pt-[122px]'>
				<h1 className='not-italic font-bold text-[64px] leading-[104px] pb-[24px] text-black'>
					Choose a career in tech in <br /> minuites
				</h1>
				<p className='not-italic font-inter font-normal text-[18px] leading-[26px] text-black mb-3'>
					Personarise is your tech talent development platform for eliminating time consuming <br />{' '}
					activities while making decision on a tech career you will succeed in — and so much <br /> more.
				</p>
			</div>

			<div className='flex items-center justify-center gap-[16px] mb-[48px]'>
				<img src='/Frame 5568.png' alt='' />
				<div className=''>
					<h1>3k+ users</h1>
					<img src='/Frame 11059.png' alt='' />
				</div>
			</div>

			<div className='flex justify-center items-center'>
				<form onSubmit={handleEmailSubmit}>
					<div className='w-[505px] h-[58px] bg-[#FCFCFC] rounded-[12px] flex items-center gap-[2px]'>
						<div>
							<input
								className='bg-transparent rounded-[12px] p-[20px] font-inter font-normal text-[18px] leading-[26px] h-[50px] w-[362px] outline-none ml-[3px]'
								type='text'
								id='email'
								placeholder='Type your email address'
                onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<button className='relative w-[133px] h-[50px] bg-[#257CFF] rounded-[8px] text-white'>
								Get started
							</button>
						</div>
					</div>
					{/* <input
            className="bg-transparent rounded-[12px] p-[20px] font-inter font-normal text-[18px] leading-[26px]"
            type="text"
            id="email"
            placeholder="Type your email address"
          />
          <button className="relative w-[133px] h-[50px] bg-[#257CFF] rounded-[8px] text-white">
            Get started
          </button> */}
				</form>
			</div>
		</div>
	);
};

export default Home;
