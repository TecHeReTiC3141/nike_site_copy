import React from 'react'

const PopularProduct = ({imgURL, name, price}) => {
  return (
    <div>
        <img src={imgURL} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
    </div>
  )
}

export default PopularProduct