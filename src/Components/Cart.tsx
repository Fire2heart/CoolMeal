import React from 'react'
import './Cart.css'
import { AiOutlinePlus } from 'react-icons/ai'
import Img from '../img/Chocolate-Milkshake-PNG-Free-Image 1.png'

function Cart({id, name, price, img}) {
    return (
        <div className='cart' key={id}>
            <div className='cart-img'>
                <img src={Img} alt="#" />
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