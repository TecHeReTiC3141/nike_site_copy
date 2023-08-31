import React from 'react'

const Button = ({ text, icon }) => {
  return (
    <button className="px-6 py-3 rounded-full text-white bg-coral-red flex gap-6 items-center font-montserrat leading-none text-lg border border-coral-red">
        {text}
        {icon && <img src={icon} alt="icon" className="rounded-full" />}
    </button>
  )
}

export default Button