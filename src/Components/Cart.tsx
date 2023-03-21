import React from 'react'
import './Cart.css'
import { AiOutlinePlus } from 'react-icons/ai'

function Cart({id, name, price, img}) {
    return (
        <div className='cart'>
            <div className='cart-img'>
                <img src={img} alt='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' />
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
        </div>
    )
}

export default Cart