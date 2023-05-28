import React from 'react'

import footerImage from '../../images/footer.png'

function Footer() {
  return (
    <div className='bg-[#2D3E74] text-white flex flex-row justify-between'>
        <div className='flex flex-col'>
            <div className='flex flex-col w-[30%] text-start gap-6 m-16'>
                <h1 className='font-bold text-3xl'>MNK</h1>
                <div className='bg-[#4541FF] h-[1px] w-1/4'></div>
                <p className='font-extralight text-slate-300'>Everything you need and more in a Global Management Consultancy. </p>
                <button className=' bg-[#4541FF] px-10 py-2 rounded-lg text-xl font-thin'>Contact Us</button>
            </div>
            <p className='text-slate-300'>©Copyrights 2023 Company Name™</p>
        </div>
        <div className='flex flex-col text-start m-16'>
            <h1 className='font-semibold'>MAIN OFFICE</h1>
            <h1 className='font-thin text-slate-300'>123 Elm Street</h1>
            <h1 className='font-thin text-slate-300'>Township, NY 00011</h1>
            <h1 className='font-thin text-slate-300'>(121) 111-0000</h1>
            <h1 className='font-thin text-slate-300'>info@MNK.com</h1>
        </div>
        <div className='flex flex-row bottom-0 m-16'>
            <img src={footerImage} alt="" />
        </div>
    </div>
  )
}

export default Footer