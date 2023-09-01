import React from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'

import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import { statistics, shoes } from '../constants'

const Hero = () => {

  const [bigShoe, setBigShoe] = React.useState(bigShoe1);

  return (
      <section id="id" className="w-full flex flex-col xl:flex-row items-center justify-start min-h-screen gap-10 max-container">
          <div className="relative xl:w-2/5 flex flex-col w-full items-start max-xl:padding-x pt-28">
            <p className="font-montserrat text-xl text-coral-red">Our Summer collections</p>
            <h1 className="mt-10 text-8xl font-palanquin font-[650] max-sm:text-[72px] max-sm:leading-[82px]">
              <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
              <br />
              <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
            </h1>
            <p className="mt-6 mb-12 font-montserrat text-slate-gray text-lg leading-8">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.        
            </p>
            <Button text="Shop now" icon={arrowRight} />

            <div className="flex flex-wrap w-full mt-20 gap-16">
              {
                statistics.map((stat, index) => {
                  return (
                    <div className="" key={index}>
                      <p className="text-4xl font-bold">{stat.value}</p>
                      <p className="text-lg font-montserrat leading-7 text-slate-gray">{stat.label}</p>

                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="flex justify-center align-center relative flex-1 xl:min-h-screen h-full py-40 max-xl:w-full bg-primary bg-hero bg-cover bg-center">
            <img src={bigShoe} alt="shoe" 
            width={610} 
            height={500} 
            className="object-contain relative z-10"/>

            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
                {
                  shoes.map((shoe, index) => {
                    return (
                      <ShoeCard key={index} imgURL={shoe.thumbnail} changeCurrentShoe={() => setBigShoe(shoe.bigShoe)
                      }
                      active={shoe.bigShoe === bigShoe}/>
                    )
                  })
                }
            </div>
          </div>
      </section>
    )
}

export default Hero