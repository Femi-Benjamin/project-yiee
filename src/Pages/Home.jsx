import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
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
		<div className='h-[760px] bg bg-center bg-no-repeat p-4 md:p-8'>
			<div className='text-center pt-12 md:pt-24'>
				<h1 className='not-italic font-bold text-4xl md:text-6xl leading-10 md:leading-16 pb-4 md:pb-10 text-black text-center'>
					<Typewriter
						options={{
							strings: ['Choose a career in tech in minutes.'],
							autoStart: true,
							loop: true,
							delay: 200,
						}}
					/>
				</h1>

				<p className='not-italic font-inter font-normal text-lg md:text-xl leading-7 md:leading-10 text-black mb-4 md:mb-6'>
					Personarise is your tech talent development platform for eliminating time-consuming <br />{' '}
					activities while making decisions on a tech career you will succeed in — and so <br />  much more.
				</p>
			</div>

			<div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4 md:mb-8'>
				<img src='/Frame 5568.png' alt='' className='w-20 md:w-auto' />
				<div className='text-center md:text-left'>
					<h1 className='text-xl md:text-2xl'>3k+ users</h1>
					<img src='/Frame 11059.png' alt='' className='w-20 md:w-auto' />
				</div>
			</div>

			<div className='md:block hidden'>
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
					</form>
				</div>
			</div>

			<div className='md:hidden block'>
				<div className='flex justify-center items-center'>
					<form onSubmit={handleEmailSubmit} className='w-full max-w-md'>
						<div className='flex flex-col md:flex-row gap-4'>
							<input
								className='bg-[#FCFCFC] rounded-lg p-4 md:p-5 font-inter font-normal text-lg leading-7 md:h-14 w-full md:w-3/4 outline-none'
								type='text'
								id='email'
								placeholder='Type your email address'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<button className='w-full md:w-auto h-14 bg-[#257CFF] rounded-lg text-white'>
								Get started
							</button>
						</div>
					</form>
				</div>
			</div>

		</div>
	);
};

export default Home;

