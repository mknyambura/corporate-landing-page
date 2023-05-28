import React from 'react'

import background from '../../images/HeaderBackground.png'
import arrow from '../../images/MenuArrow.png'

function Header() {
  return (
    <div>
        <nav className='flex flex-row justify-between bg-transparent m-16'>
            <h1 className='font-bold text-4xl'>MNK</h1>
            <div className='flex flex-row gap-12'>
                <h1>Services</h1>
                <h1>Clients</h1>
                <h1>Stats</h1>
                <h1>Contact us</h1>
            </div>
            <div>
                <img src={arrow} alt="" />
            </div>
        </nav>
    </div>
  )
}

export default Header