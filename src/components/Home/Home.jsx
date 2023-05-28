import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import rocket from '../../images/rocket.png'
import rectangle17 from '../../images/Rectangle17.png'
import rectangle18 from '../../images/Rectangle18.png'
import rectangle19 from '../../images/Rectangle19.png'
import rectangle20 from '../../images/Rectangle20.png'
import rectangle21 from '../../images/Rectangle21.png'
import computer from '../../images/computer.png'
import launch from '../../images/launch.png'
import phone from '../../images/phone.png'
import performance from '../../images/performance.png'
import lines from '../../images/lines.png'
import clients from '../../images/clients.png'
import arrowRight from '../../images/ArrowRight.png'

import '../Home/Home.css'


function Home() {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <div>
        <div className='bg h-[110vh]'>
            <Header/>
            <div className='flex flex-row items-center justify-center gap-8 m-16'>
                <h1 className='font-semibold text-5xl text-center w-[30%]'>TAKE YOUR BUSINESS TO <span className='font-bold'>NEW HEIGHT</span></h1>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-row gap-2 justify-center items-center w-[50%] m-16'>
                        <div className='bg-[#4541FF] h-[50px] w-[2px]'></div>
                        <p>We will help you breakthrough by translating your ideas into a  working reality. It’s time to grow. </p>
                    </div>
                    <button className='bg-[#4541FF] rounded-lg px-10 py-2 w-[30%] text-white'>Contact Us</button>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-between m-16'>
            <h1 className='text-slate-400 mb-4'>OUR SERVICES</h1>
            <div className='bg-[#4541FF] h-[2px] w-[100px] mb-8'></div>
            <div className='flex flex-row justify-between gap-8'>
                <div className='flex flex-col w-[50%]'>
                    <h1 className='text-bold text-5xl text-center w-10 mb-8'><span className='text-[#4541FF] text-bold'>Strategy Consulting,</span>Analytics & Leadership</h1>
                    <div className='flex flex-col gap-12'>
                        <p className='font-thin'>We are a passionate team determined to help you translate your ideas into high-quality solutions. With extensive experience in consultancy and international analytics, we specialize in using the best practices in order to help y ou succeed.</p>
                        <p className='font-thin'>We offer dedicated organisational consultancy, market intelligence, and optimized analytical support.</p>
                        <p className='font-thin'>We are truly determined to transform your ideas into something great. Through the power of creativity and collaboration, we will strive to take you on an unforgettable journey that will leave a long-lasting impact on your business.</p>
                    </div>
                </div>

                <div className='flex flex-col w-[50%] items-center justify-between'>
                    <div className='flex flex-row justify-between w-full relative shadow-2xl rounded-lg h-[95px]'>
                        <h1 className='uppercase flex items-center justify-center'>Consultancy</h1>
                        
                        <div className=''>
                            <img src={rectangle17} alt="" className='h-24' />
                        </div>
                        <div className='bg-transparent absolute right-6 top-4'>
                            <img src={rocket} alt="" />
                        </div>
                    </div>

                    <div className='flex flex-row justify-between w-full relative shadow-2xl rounded-lg h-[95px]'>
                        <h1 className='uppercase flex items-center justify-center'>Digital Marketing & Communication</h1>
                        
                        <div className=''>
                            <img src={rectangle18} alt="" className='h-24' />
                        </div>
                        <div className='bg-transparent absolute right-6 top-4'>
                            <img src={computer} alt="" />
                        </div>
                    </div>

                    <div className='flex flex-row justify-between w-full relative shadow-xl rounded-lg h-[95px]'>
                        <h1 className='uppercase flex items-center justify-center'>Customer Profitability</h1>
                        
                        <div className=''>
                            <img src={rectangle19} alt="" className='h-24' />
                        </div>
                        <div className='bg-transparent absolute right-6 top-4'>
                            <img src={launch} alt="" />
                        </div>
                    </div>

                    <div className='flex flex-row justify-between w-full relative shadow-xl rounded-lg h-[95px]'>
                        <h1 className='uppercase flex items-center justify-center'>Analytics</h1>
                        
                        <div className=''>
                            <img src={rectangle20} alt="" className='h-24' />
                        </div>
                        <div className='bg-transparent absolute right-6 top-4'>
                            <img src={phone} alt="" />
                        </div>
                    </div>

                    <div className='flex flex-row justify-between w-full relative shadow-xl rounded-lg h-[95px]'>
                        <h1 className='uppercase flex items-center justify-center'>Organizational Performance</h1>
                        
                        <div className=''>
                            <img src={rectangle21} alt="" className='h-24' />
                        </div>
                        <div className='bg-transparent absolute right-6 top-4'>
                            <img src={performance} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='flex items-center m-16'>
            <div className='bg-1 mb-16 flex flex-row items-center justify-between'>
                <div className='m-16 relative'>
                    <div className='absolute top-0 left-0 items-center justify-center'>
                        <img src={lines} alt=""/>
                    </div>
                    <img src={clients} alt="" className='m-24'/>
                </div>
                <div className='text-white w-[50%] m-16 '>
                    <h1 className='text-5xl'><span className='font-bold'>The Global Management Consultancy </span>picked by so many companies</h1>
                    <p className='text-slate-400'>Utilizing the best-known practices, we offer end-to-end support from dedicated organization consultancy to high-performing business solutions. We are determined to transform your ideas into something great. Through the power of creativity and collaboration,  we can help you create something that will leave a long-lasting impact on your company.</p>
                </div>
            </div>
        </div>

        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='flex flex-col justify-between m-16'>
                <div>
                    <h1 className='text-slate-400 mb-4 uppercase'>stats</h1>
                    <div className='bg-[#4541FF] h-[2px] w-[100px] mb-8'></div>
                </div>
                <div className='flex flex-row justify-between gap-8'>
                    <div className='flex flex-col w-[50%]'>
                        <h1 className='text-5xl'><span className='text-[#4541FF] text-center'>Our Competence </span>over the last 20 years...</h1>
                        <p className='font-thin'>We are a passionate team determined to help you translate your ideas into high-quality solutions. With extensive experience in consultancy and international analytics, we specialize in using the best practices in order to help y ou succeed</p>
                        <p className='font-thin'>We offer dedicated organisational consultancy, market intelligence, and optimized analytical support.</p>
                    </div>

                    <div className='grid grid-cols-2 gap-12'>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-8xl'>
                                {counterOn && 
                                    <CountUp start={0} end={12266} duration={2} delay={0}/>
                                }
                            </h1>
                            <p className='text-xl font-thin mt-8'>Clients that are currently working with us</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-8xl'>
                                {counterOn && 
                                    <CountUp start={0} end={213} duration={2} delay={0}/>
                                }k
                            </h1>
                            <p className='text-xl font-thin mt-8'>Dollars saved through our formulated solutions</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-8xl'>
                                {counterOn && 
                                    <CountUp start={0} end={85} duration={2} delay={0}/>
                                }%
                            </h1>
                            <p className='text-xl font-thin mt-8'>Success growth rate of clients that work with us</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-8xl'>
                                {counterOn && 
                                    <CountUp start={0} end={36} duration={2} delay={0}/>
                                }k+
                            </h1>
                            <p className='text-xl font-thin mt-8'>Uniquely created solutions for our clients </p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>

        <div className='m-16'>
            <div className='flex flex-col  bg-[#C6E1F9] px-8 py-8 rounded-3xl'>
                <h1 className='font-semibold text-4xl '>Contact Us Today</h1>
                <div>
                    <img src={arrowRight} alt="" className='mt-4 mb-4'/>
                </div>
                <p className='font-thin mb-8'>Contact us to get more information on how we can help you reach your goals faster.</p>
                <form action="">
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-4'>First Name</label>
                            <input type="text"  className='px-2 py-2 rouned-lg w-full' name="" id="" placeholder=''/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-4'>Last Name</label>
                            <input type="text"  className='px-2 py-2 rouned-lg w-full' name="" id="" placeholder=''/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-4'>Email</label>
                            <input type="email" className='px-2 py-2 rouned-lg w-full'  name="" id="" placeholder=''/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-4'>Phome</label>
                            <input type="number" className='px-2 py-2 rouned-lg w-full' name="" id="" placeholder=''/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Aditional Details</label>
                            <input type="text"  className='h-[200px] px-2 py-2 rouned-lg w-full' name="" id="" placeholder=''/>
                        </div>
                    </div>
                    <button type="submit" className='bg-[#4541FF] text-white text-xl font-thin px-8 py-2 rounded-lg mt-8 mb-8'>Submit</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home