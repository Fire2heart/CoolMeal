import React from 'react'
import './Header.css'
import {FaUser} from 'react-icons/fa'
import {HiShoppingBag} from 'react-icons/hi'
import Search from './Search.tsx'

export default function Header() {
  return (
    <header>
      <div className='top'>
        <div className='name'>Cool<span className='name-red'>Meal</span></div>
        <div className='sign-in-box'>
          <div className='sing-in'>Sign in</div>
          <FaUser className='user header-icon' />
          <HiShoppingBag className='shoping-bag header-icon'/>
        </div>
      </div>
      <Search />
    </header>
  )
}
