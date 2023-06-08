import React from 'react'
import './ProductCart.css'
// import Img from '../img/Product/pitstsa-syr-nachinka-1-min 2.png'

function ProductCart({price, weight, name, img, description}) {
    // const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elidsfdst. Aut ad ab suscipit distinctio voluptates, fugit vitae voluptas consectetur cumque! Beatae error atque perspiciatis dolorem fugit voluptate maxime iste tempora repellendus?';
    
  return (
    <div className='product'>
        <div className='top-info info'>
            <div className='product-icon'>
                <img src={img} alt='#'></img>
            </div>
            <div className='product-info'>
                <div className='product-name'>{name}</div>
                <div className='product-weight'>{weight}</div>
                <div className='product-recipe'>{description.length > 56 ? description.slice(0, 56) + '...' : description}</div>
            </div>
        </div>
        <div className='bottom-info info'>
            <div className='button-details'>Детальніше</div>
            <div className='product-price'>від {price}₴</div>
        </div>
    </div>
  )
}

export default ProductCart