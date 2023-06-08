import React from 'react'
import './Cart.css'
import { AiOutlinePlus } from 'react-icons/ai'

function Cart({id, name, price, img}) {
    return (
        <li className='cart'>
            <div className='cart-img'>
                <img src={img} alt='' />
            </div>
            <div className='cart-bar'>
                <div className='cart-info'>
                    <div className='cart-price'>{price}₴</div>
                    <div className='cart-name'>{name}</div>
                </div>
                <div className='cart-add'>
                    <AiOutlinePlus className='cart-icon'/>
                </div>
            </div>
        </li>
    )
}

export default Cart