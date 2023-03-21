import React from 'react'
import './Category.css'
// import Img from '../img/pngegg 1.png'

function Category({name, img}) {
  return (
    <div className='category'>
        <div className='category-icon'>
            <img src={img} alt='#'></img>
        </div>
        <div className='category-name'>{name}</div>
    </div>
  )
}

export default Category