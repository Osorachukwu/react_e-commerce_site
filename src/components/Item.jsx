import React from 'react'
import Button from './Button'

function Item({img, title, price,}) {
  return (
    <div className='productItem'>
        <img className='productItem__img' src={img} alt="" />
        <p>{title}</p>
        <p>{price}</p>
        <Button text='click' bgColor='red'/>

    </div>
  )
}

export default Item