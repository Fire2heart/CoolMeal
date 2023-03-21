import React from 'react'
import './ProductCart.css'
// import Img from '../img/Product/pitstsa-syr-nachinka-1-min 2.png'

function ProductCart({price, weight, recipe, name, img}) {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elidsfdst. Aut ad ab suscipit distinctio voluptates, fugit vitae voluptas consectetur cumque! Beatae error atque perspiciatis dolorem fugit voluptate maxime iste tempora repellendus?';
    
  return (
    <div className='product'>
        <div className='top-info info'>
            <div className='product-icon'>
                <img src={'https://i.ibb.co/j3MLb1q/pngwing-com-2.png'} alt='#'></img>
            </div>
            <div className='product-info'>
                <div className='product-name'>{name}Піца мисливська</div>
                <div className='product-weight'>{weight}(390-550г)</div>
                <div className='product-recipe'>{text.length > 56 ? text.slice(0, 56) + '...' : text}</div>
            </div>
        </div>
        <div className='bottom-info info'>
            <div className='button-details'>Детальніше</div>
            <div className='product-price'>від {price}205₴</div>
        </div>
    </div>
  )
}

export default ProductCart