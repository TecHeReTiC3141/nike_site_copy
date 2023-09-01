import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className="flex items-center flex-wrap max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img src={offer} alt="special offer" width={773} height={687} className="object-contain w-full"/>
        </div>
        <div className="flex-1">
          <h2 className="font-palanquin text-4xl text-wrap font-bold lg:max-w-lg capitalize">
           <span className="text-coral-red">special</span> offer
          </h2>
          <p className="my-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
          </p>
          <p className="lg:max-w-lg info-text mb-10">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
          </p>
          <div className="flex gap-4">

            <Button text="View details" />
            <Button text="Learn more" 
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"/>
     
          </div>
        </div>

    </section>
  )
}

export default SpecialOffer