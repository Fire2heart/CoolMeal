import React from 'react'
import './Footer.css'
import {BiHome} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GoSearch} from 'react-icons/go'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-icons'>
            <BiHome className='active'/>
            <GiHamburgerMenu />
            <GoSearch />
        </div>
    </div>
  )
}

export default Footer