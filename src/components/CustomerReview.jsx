import React from 'react'
import { star } from '../assets/icons'

const CustomerReview = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col items-center ">
        <img src={imgURL} alt={customerName} width={120} height={120} className="object-contain rounded-full mb-4" />
        <h4 className="text-center max-w-sm info-text">
            {feedback}
        </h4>
        <div className="flex gap-2 items-center mt-4">
            <img src={star} alt="star" 
            width={24} height={24} />
            <p className="text-lg font-montserrat info-text">({rating})</p>
        </div>
        <h4 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h4>
    </div>
  )
}

export default CustomerReview