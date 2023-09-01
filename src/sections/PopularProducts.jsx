import React from 'react'

import { products } from '../constants';

import PopularProduct from '../components/PopularProduct';

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <h1 className="capitalize font-palanquin text-4xl mb-5 font-bold ">Our <span className="text-coral-red">popular</span> products</h1>

      <p className="font-montserrat text-slate-gray lg:max-w-lg">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gird-cols-1 sm:gap-4 gap-14">
        {
          products.map((prod, index) => {
            return (
              <PopularProduct {...prod} key={index} />
            );
          })
        }
      </div>
    </section>
  )
}

export default PopularProducts