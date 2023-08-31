import React from 'react'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SuperQuality = () => {
  return (
    <section className="max-container flex max-lg:flex-col items-center justify-between gap-16" id="about-us">

    
      <div className="flex-1">
        <h2 className="font-palanquin text-4xl text-wrap font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="my-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg info-text mb-10">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button text="View details" icon={arrowRight} />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
        
    </section>
  )
}

export default SuperQuality