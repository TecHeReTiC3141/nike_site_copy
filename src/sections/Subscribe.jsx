import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className="max-container flex max-lg:flex-col justify-between items-center gap-10" id="contact-us">
      <h1 className="capitalize font-palanquin text-4xl mb-5 font-bold lg:max-w-md leading-[68px]">sign up from  <span className="text-coral-red">updates</span> & newsletter</h1>
      <div className="flex items-center rounded-full pl-6 pr-3 py-2 border border-slate-gray lg:max-w-xl relative max-lg:w-full lg:w-1/2 gap-4 max-sm:flex-col max-sm:items-end max-sm:border-0">
      <input type="email" name="email" id="email" placeholder="subscribe@nike.com" className="flex-1 focus:outline-none min-w-xl  max-sm:w-full max-sm:border border-slate-gray rounded-full p-2.5 text-slate-gray" />
      <Button text="Sign Up"/>
      </div>
      
    </section>
  )
}

export default Subscribe