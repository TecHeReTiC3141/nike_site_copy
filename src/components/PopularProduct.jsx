import React from 'react'
import { star } from '../assets/icons'

const PopularProduct = ({imgURL, name, price}) => {
  return (
    <div>
        <img src={imgURL} alt={name} className="mb-6 w-[280px] h-[280px]"/>
        <div className="flex gap-2 items-centers">
            <img src={star} alt="star" width={24} height={24} />
            <p className="text-slate-gray text-xl font-montserrat">(4.5)</p>
        </div>
        <h3 className="my-4 font-palanquin font-semibold text-2xl">{name}</h3>
        <p className="font-montserrat text-coral-red font-bold">{price}</p>
    </div>
  )
}

export default PopularProduct