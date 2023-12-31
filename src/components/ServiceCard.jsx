import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="px-10 py-16 shadow-3xl rounded-xl ring-1 ring-gray-100 bg-white flex-1  sm:w-[350px] sm:min-w-[350px] w-full">
        <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl font-bold">{label}</h3>
        <p className="mt-3 break-wordsfont-montserrat text-lg text-slate-gray">{subtext}</p>
    </div>

  )
}

export default ServiceCard