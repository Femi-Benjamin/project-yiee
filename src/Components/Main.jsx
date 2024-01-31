import React from 'react'
import Typewriter from "typewriter-effect";


const Main = () => {
    return (
        <div className='bgn h-auto'>
            <div className='justify-center flex'>
                <div className='flex flex-wrap justify-center items-center mb-12 sm:mb-8 md:mb-16 lg:mb-24 md:px-0 px-3'>
                    <img className='w-1/2 sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6 p-2' src="/5f75c9e82fc2b60291843655_logo-bar-aave@2x.png" alt="" />
                    <img className='w-1/2 sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6 p-2' src="/5f75c9fcb3c591e68dbfcaa4_logo-bar-synthetix@2x.png" alt="" />
                    <img className='w-1/2 sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6 p-2' src="/5f75ca27c846347fa682b4fd_logo-bar-nexus-mutual@2x.png" alt="" />
                    <img className='w-1/2 sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6 p-2' src="/5f75ca34dd86be65f1d0105e_logo-bar-ens@2x.png" alt="" />
                    <img className='w-1/2 sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6 p-2' src="/62bc1f6651f455fb45855722_logo-bar-truefi.png" alt="" />
                    <img className='w-1/2 sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6 p-2' src="/611cff2e506e641f28a62ea3_logo-bar-compound.png" alt="" />
                    <img className='w-1/2 sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6 p-2' src="/611cff5378ee38d57869d474_logo-bar-paxos.png" alt="" />
                </div>
            </div>
            {/* /// */}

            {/* MAP YOUR PASSION */}
            <div className='flex justify-between flex-col md:flex-row  md:mx-auto mb-6 md:mb-16 md:text-left text-center items-center'>
                <div className='md:mr-8 lg:ml-[138px] px-3'>
                    <h1 className='not-italic font-dm sans font-bold text-4xl md:text-5xl leading-10 md:leading-[70px] text-black md:pb-6 pb-7'>
                        Map your passion to a <br /> tech career in minutes
                    </h1>
                    <p className='not-italic font-dm sans font-normal text-lg md:text-xl leading-6 md:leading-8 text-[#15143966]'>
                    <Typewriter
						options={{
							strings: ['Identify a career in tech you are passionate about in minutes. <br/> Simply select the attributes that best define your person - <br/> and watch the system recommend a career that is a close-fit <br/> to you and simplified details about that career.'],
							autoStart: true,
							loop: true,
						}}
					/>
                    </p>
                </div>
                <img className='mt-6 mb-10 md:mt-0' src="/Group 55836.png" alt="" />
            </div>
            {/* /// */}

            {/* FEATURES */}
            <div className='flex flex-col md:flex-row justify-evenly text-center font-dm sans md:mb-[206px] mb-20 md:px-0 px-4'>
                <div className='mb-8 md:mb-0'>
                    <h1 className='not-italic font-semibold text-[14px] md:text-[18px] leading-[26px] uppercase text-[#257CFF]'>sign up/login</h1>
                    <p className='not-italic font-normal text-[16px] md:text-[14px] leading-[26px] text-[#15143966]'>Explore the unique approach Personarise use to <br /> help you maximize your career by clicking - “Get <br /> started”. </p>
                </div>
                <div className='mb-8 md:mb-0'>
                    <h1 className='not-italic font-semibold text-[14px] md:text-[18px] leading-[26px] uppercase text-[#257CFF]'>communicate your passion</h1>
                    <p className='not-italic font-normal text-[16px] md:text-[14px] leading-[26px] text-[#15143966]'>Communicate your passion to Personarise in <br /> through an intuitive interface and get matched <br /> to a career in tech you will succeed in. </p>
                </div>
                <div>
                    <h1 className='not-italic font-semibold text-[14px] md:text-[18px] leading-[26px] uppercase text-[#257CFF]'>become world-class</h1>
                    <p className='not-italic font-normal text-[16px] md:text-[14px] leading-[26px] text-[#15143966]'>Be among the top 1% in your career and <br /> become a rock star in your tech career by <br /> identifying your skills gap and bridging them,</p>
                </div>
            </div>
            {/* /// */}

            {/* SWITCH TO CARRER */}
            <div className='lg:flex lg:justify-center'>
                <div className='lg:w-2/3 '>
                    <div className='not-italic font-dm sans text-center mb-8 lg:mb-16 md:px-o px-3'>
                        <h1 className='font-bold text-3xl lg:text-4xl xl:text-5xl leading-10 lg:leading-12 xl:leading-14 mb-4 lg:mb-6 xl:mb-8'>
                            Switch to a career in tech with ease
                        </h1>
                        <p className='font-normal text-lg lg:text-xl xl:text-2xl leading-8 lg:leading-9 xl:leading-10 text-[#15143966]'>
                            Personarise makes it easier for you to switch to a highly demanded tech career with <br /> ease and become a world-class talent in any career of choice.
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-center lg:justify-between items-center text-center border-b-2 pb-4 lg:pb-8 not-italic font-medium text-lg lg:text-xl xl:text-2xl leading-6 lg:leading-7 xl:leading-8 text-[#15143966] p-5 cursor-pointer mb-8 lg:mb-16'>
                        <h1 className='text-[#257CFF] hover:text-[#257CFF] mb-2 lg:mb-0 md:px-0 px-2'>Sales</h1>
                        <h1 className='hover:text-[#257CFF] mb-2 lg:mb-0 md:px-0 px-2'>Marketing</h1>
                        <h1 className='hover:text-[#257CFF] mb-2 lg:mb-0 md:px-0 px-2'>Customer Success</h1>
                        <h1 className='hover:text-[#257CFF] mb-2 lg:mb-0 md:px-0 px-2'>Recruiting</h1>
                        <h1 className='hover:text-[#257CFF] mb-2 lg:mb-0 md:px-0 px-2'>Information Technology</h1>
                        <h1 className='hover:text-[#257CFF] mb-2 lg:mb-0 md:px-0 px-2'>Education</h1>
                    </div>
                </div>
            </div>
            {/* /// */}

            {/* LEARN ABOUT SALES */}
            <div className='flex flex-col md:flex-row justify-between mx-4 md:ml-[247.95px] md:mr-[237.5px] md:mb-[193.62px] md:text-left text-center items-center'>
                <div className='flex flex-col mb-8 md:mb-0 md:mr-4'>
                    <div>
                        <h1 className='not-italic font-semibold font-dm sans text-[18px] md:text-[24px] leading-[26px] uppercase text-[#257CFF] mb-[13.35px]'>learn about sales</h1>
                        <p className='not-italic font-medium text-[16px] md:text-[18px] leading-[26px] text-[#15143966] mb-[53.83px]'>Learn what sales is all about <br /> and how to start a career in sales in <br /> today's world.</p>
                    </div>

                    <div>
                        <h1 className='not-italic font-semibold font-dm sans text-[18px] md:text-[24px] leading-[26px] uppercase text-[#257CFF] mb-[13.35px]'>discover skills</h1>
                        <p className='not-italic font-medium text-[16px] md:text-[18px] leading-[26px] text-[#15143966] mb-[53.83px]'>Discover skills needed by <br /> employers from a sales <br /> person.</p>
                    </div>
                </div>

                <div className='mb-8 md:mb-0'>
                    <img className='w-full md:w-auto' src="/Group 55829.png" alt="" />
                </div>

                <div className='flex flex-col'>
                    <div>
                        <h1 className='not-italic font-semibold font-dm sans text-[18px] md:text-[24px] leading-[26px] uppercase text-[#257CFF] mt-[53.83p mb-[13.35px]'>learn from experts</h1>
                        <p className='not-italic font-medium text-[16px] md:text-[18px] leading-[26px] text-[#15143966] mb-[53.83px] '>Learn sales skills from sales <br /> experts and understand how <br /> they sell more with less.</p>
                    </div>

                    <div>
                        <h1 className='not-italic font-semibold font-dm sans text-[18px] md:text-[24px] leading-[26px] uppercase text-[#257CFF] mb-[13.35px]'>create portfolios</h1>
                        <p className='not-italic font-medium text-[16px] md:text-[18px] leading-[26px] text-[#15143966] mb-[20px]'>Create job-winning <br /> portfolios and engage in <br /> world-class projects.</p>
                    </div>
                </div>
            </div>
            {/* /// */}

            {/* WORLD CLASS  */}
            <div className='md:pr-[180px] mb-[197px] '>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <img src="/Group 55837.png" alt="" className='mb-4 md:mb-0 md:mr-4' />
                    <div className='not-italic font-inter text-[#18191F] text-center md:text-left md:px-0 px-4'>
                        <h1 className='font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[54px] mb-5 md:mb-5 md:mt-0 mt-5'>Become a world-class <br /> individual in your field
                        </h1>
                        <p className='font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[32px] mb-8 md:mb-12'>
                        <Typewriter
						options={{
							strings: ['Identify the skills that world-class individuals possess<br/> in  your field and what they know. Learn the skills with<br /> any eLearning provider you prefer.'],
							autoStart: true,
							loop: true,
						}}
					/>
                       
                        </p>

                        <div className='flex items-center gap-[10px] justify-center md:justify-start'>
                            <h1 className='not-italic font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#257CFF]'>Learn more</h1>
                            <img src="/Vector.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* /// */}

            {/* HIT YOUR NUMBERS */}
            <div className='px-4 md:px-0 mb-20 md:mb-[205px]'>
                <div className='flex flex-col md:flex-row justify-around items-center md:text-left text-center'>
                    <div className='not-italic font-inter text-[#18191F]'>
                        <h1 className='font-bold text-2xl md:text-4xl leading-[54px] mb-2 md:mb-5'>Hit your numbers</h1>
                        <p className='font-normal text-base md:text-lg leading-[32px] mb-7 md:mb-14'>
                            Track your career progress and hit your numbers - <br /> increase salary, more hand-on experience, develop skills <br /> with the 1st talent development platform.
                        </p>
                        <div className='md:block hidden'>
                            <div className='flex items-center gap-2 md:pl-0 pl-4'>
                                <h1 className='not-italic font-normal text-base md:text-lg leading-[24px] text-[#257CFF]'>Learn more</h1>
                                <img src="/Vector.png" alt="" className='w-4 md:w-auto' />
                            </div>
                        </div>

                        <div className='block md:hidden'>
                            <div className='flex items-center justify-center gap-2 md:pl-0 pl-4'>
                                <h1 className='not-italic font-normal text-base md:text-lg leading-[24px] text-[#257CFF]'>Learn more</h1>
                                <img src="/Vector.png" alt="" className='w-4 md:w-auto' />
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <img src="/Group 55833.png" alt="" className='w-full md:w-auto pt-16' />
                    </div>
                </div>
            </div>
            {/* /// */}

            {/* SWITCH CARRER */}
            <div className='flex justify-center md:mb-[158px] mb-16 mx-4'>
                <div className='h-[460px] border-2 border-[#EBEAED] rounded-md text-center p-16'>
                    <h1 className='not-italic font-bold text-3xl sm:text-4xl md:text-5xl leading-10 sm:leading-12 md:leading-14 text-[#000000de] md:pt-10 pb-4 sm:pb-8'>Switch to a career in tech with ease</h1>
                    <p className='not-italic font-medium text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-[#15143966] pb-12 sm:pb-16'>Start your tech journey or take your career to the next level with Personarise today.</p>

                    <button className='w-full sm:w-[186px] h-12 sm:h-[50px] bg-[#257CFF] rounded-md cursor-pointer font-dm sans font-medium text-base sm:text-lg leading-6 sm:leading-7 text-white'>Get Started</button>
                </div>
            </div>
            {/* /// */}

            {/* /// TESTIMONIALS*/}
            <div>
                <h1 className='font-inter font-bold text-4xl lg:text-6xl leading-6 lg:leading-8 text-center text-[#000000de] mb-8 lg:mb-10'>Testimonials</h1>
                <p className='font-inter font-normal text-base lg:text-lg leading-6 lg:leading-7 text-center text-[#000000] mb-16 lg:mb-20'>These are the stories of some of our very early customers about their experience of using <br /> Personarise.</p>


                <div className='md:mx-0 mx-4'>
                    {/* /// CARD 1 */}
                    <div className='md:flex justify-evenly'>
                        <div className='md:mb-[160px mb-[20px]'>
                            <div className='w-full h-[296px bg-[#F4F1F1] rounded-[16px] mb-[40px] py-5'>
                                <img className='pl-[33.32px] pb-[22.67px]' src="/bxs_quote-left.png" alt="" />
                                <p className='font-inter md:text-left text-center font-medium text-[16px] leading-[26px] text-[#00000099] mb-[27px] px-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Facilisi sapien ipsum, mi urna, vehicula elit congue etiam <br /> purus. Amet eu risus, sed auctor et. Orci sed faucibus <br /> cursus dictum tincidunt amet, leo. </p>
                                <div className='flex items-center ml-[50px] gap-[16px]'>
                                    <img src="/Ellipse 41.png" alt="" />
                                    <div className='not-italic font-inter text-[#00000099]'>
                                        <h1 className='font-bold text-[16px] leading-[26px]'>Joseph Umoh</h1>
                                        <p className='font-medium text-[12px] leading-[15px] '>CEO Tera Culture, Lagos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* /// CARD 2 */}
                        <div className='md:mb-[160px mb-[20px]'>
                            <div className='w-full h-[296px bg-[#F4F1F1] rounded-[16px] mb-[40px] py-5'>
                                <img className='pl-[33.32px] pb-[22.67px]' src="/bxs_quote-left.png" alt="" />
                                <p className='font-inter md:text-left text-center font-medium text-[16px] leading-[26px] text-[#00000099] mb-[27px] px-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Facilisi sapien ipsum, mi urna, vehicula elit congue etiam <br /> purus. Amet eu risus, sed auctor et. Orci sed faucibus <br /> cursus dictum tincidunt amet, leo. </p>
                                <div className='flex items-center ml-[50px] gap-[16px]'>
                                    <img src="/Ellipse 41.png" alt="" />
                                    <div className='not-italic font-inter text-[#00000099]'>
                                        <h1 className='font-bold text-[16px] leading-[26px]'>Joseph Umoh</h1>
                                        <p className='font-medium text-[12px] leading-[15px] '>CEO Tera Culture, Lagos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* /// CARD 3 */}
                    <div className='md:flex justify-evenly'>
                        <div className='mb-[20px]'>
                            <div className='w-full h-[296px bg-[#F4F1F1] rounded-[16px] mb-[40px] py-5'>
                                <img className='pl-[33.32px] pb-[22.67px]' src="/bxs_quote-left.png" alt="" />
                                <p className='font-inter md:text-left text-center font-medium text-[16px] leading-[26px] text-[#00000099] mb-[27px] px-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Facilisi sapien ipsum, mi urna, vehicula elit congue etiam <br /> purus. Amet eu risus, sed auctor et. Orci sed faucibus <br /> cursus dictum tincidunt amet, leo. </p>
                                <div className='flex items-center ml-[50px] gap-[16px]'>
                                    <img src="/Ellipse 41.png" alt="" />
                                    <div className='not-italic font-inter text-[#00000099]'>
                                        <h1 className='font-bold text-[16px] leading-[26px]'>Joseph Umoh</h1>
                                        <p className='font-medium text-[12px] leading-[15px] '>CEO Tera Culture, Lagos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* /// CARD 4 */}
                        <div className='mb-[80px]'>
                            <div className='w-full h-[296px bg-[#F4F1F1] rounded-[16px] py-5'>
                                <img className='pl-[33.32px] pb-[22.67px]' src="/bxs_quote-left.png" alt="" />
                                <p className='font-inter md:text-left text-center font-medium text-[16px] leading-[26px] text-[#00000099] mb-[27px] px-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Facilisi sapien ipsum, mi urna, vehicula elit congue etiam <br /> purus. Amet eu risus, sed auctor et. Orci sed faucibus <br /> cursus dictum tincidunt amet, leo. </p>
                                <div className='flex items-center ml-[50px] gap-[16px]'>
                                    <img src="/Ellipse 41.png" alt="" />
                                    <div className='not-italic font-inter text-[#00000099]'>
                                        <h1 className='font-bold text-[16px] leading-[26px]'>Joseph Umoh</h1>
                                        <p className='font-medium text-[12px] leading-[15px] '>CEO Tera Culture, Lagos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /// */}

            {/* INFO */}
            <div className='flex flex-col justify-center px-4 md:px-0 mb-8 md:mb-16'>
                <div className='w-full md:w-[70%] mx-auto bg-[#F4F1F1] md:p-20 p-10 rounded-2xl'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='mb-8 md:mb-0 md:text-left text-center'>
                            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl md:leading-[78px] text-black mb-4 md:mb-6 '>Curious to try? <br /> Get started now!</h1>
                            <p className='font-normal text-base md:text-lg lg:text-xl  text-black'>Join our early users and discover how Personarise <br /> is  helping you maximize career opportunities.</p>
                        </div>

                        <div className=' md:flex-row items-center'>
                            <form className='mb-4 md:mb-0'>
                                <textarea
                                    className='md:w-[408px] w-60 h-[120px] md:h-40 bg-white rounded-md md:mb-5 p-2 focus:outline-none'
                                    type="text"
                                    placeholder='Curious to try? Type now!'
                                />
                            </form>

                            <button className='md:w-[408px] w-full h-[58px] md:h-16 bg-black text-white rounded-md text-base md:text-lg lg:text-xl'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main