import React from 'react'

const Button = ({ text, icon, backgroundColor="bg-coral-red", borderColor="border-coral-red",
  textColor="text-white" }) => {
  return (
    <button className={`px-6 py-3 rounded-full  flex gap-6 items-center font-montserrat leading-none text-lg border
    ${backgroundColor} ${borderColor} ${textColor}`}>
        {text}
        {icon && <img src={icon} alt="icon" className="rounded-full" />}
    </button>
  )
}

export default Button